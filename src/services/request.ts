import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Toast } from 'antd-mobile';
import { isNumber } from 'lodash-es';

const baseURL =
  process.env.NODE_ENV === 'development' ? '/' : window.location.origin;

const errorHttpCodeMap: { [key: string]: string } = {
  401: '当前用户没有权限请重新登录',
  403: '拒绝访问',
  404: 'API 地址未找到',
  500: '服务器错误',
  502: '错误网关',
  504: '网关超时',
};

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const service = axios.create({
  baseURL,
  timeout: 10 * 1000, // 10s
  withCredentials: true,
});

// service.interceptors.request.use(config => {
//   // 接口配置了 fullLoading 时，取消全屏 loading
//   if (config.fullLoading) {
//     showFullscreenLoading();
//   }
//   return config;
// }, tryHideFullscreenLoading);

// 是否超时
const isTimeout = (message: string) => message?.includes('timeout');

service.interceptors.response.use(
  (response: any) => {
    const permissionDenied = response.data.status === 401;
    const success = response.data.code === 0 || response.data.code === 200;
    const isNotSignin = response.data.code === 41002;
    if (isNotSignin) {
      window.location.href = `${window.location.origin}`;
      return;
    }
    if (!success) {
      if (!permissionDenied) {
        Toast.show({
          icon: 'fail',
          content: response.data?.msg || response.data?.message || '未知错误',
        });
      }
      console.error(response);
      throw new Error(response.data.status);
    }
    return response;
  },
  (error) => {
    const permissionDenied = error.response?.status === 401;
    if (!permissionDenied) {
      console.error(error);
    }
    // 无权限时重定向到 登陆页面
    if (permissionDenied && error.response) {
      window.location = error.response.data;
      return error;
    }

    // http error
    // tryHideFullscreenLoading();

    if (error?.response) {
      const message = errorHttpCodeMap[error.response.status] || '未知错误';
      Toast.show({
        icon: 'fail',
        content: message,
      });
    } else if (isTimeout(error?.message)) {
      Toast.show({
        icon: 'fail',
        content: '请求超时',
      });
    } else if (error?.message) {
      Toast.show({
        icon: 'fail',
        content: error.message,
      });
    }
    throw new Error(error);
  }
);

interface CustomAxiosResponse<T> {
  success: true;
  data: T;
  response: AxiosResponse;
}

interface CustomAxiosResponseErr {
  success: false;
  isHttpError: boolean;
}

export const request = async <T>(
  config: AxiosRequestConfig
): Promise<CustomAxiosResponse<T> | CustomAxiosResponseErr> => {
  try {
    const response = await service.request(config);
    const data =
      config?.responseType === 'blob' ? response.data : response.data.data;
    return {
      success: true,
      response,
      data,
    };
  } catch (e) {
    return {
      success: false,
      isHttpError: !isNumber(Number(e)),
    };
  }
};

export const get = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<CustomAxiosResponse<T> | CustomAxiosResponseErr> =>
  request({ method: 'get', url, ...config });

export const post = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<CustomAxiosResponse<T> | CustomAxiosResponseErr> =>
  request({ method: 'post', url, data, ...config });

export const put = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<CustomAxiosResponse<T> | CustomAxiosResponseErr> =>
  request({ method: 'put', url, data, ...config });

export const del = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<CustomAxiosResponse<T> | CustomAxiosResponseErr> =>
  request({ method: 'delete', url, ...config });
