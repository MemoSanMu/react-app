/**
 * 获取 url 中的参数
 * 注：此方法有个特殊场景问题，如果url query内含有redirectUrl(重定向地址)参数,且此值也有?分隔符。
 * 列如：https://sunflower.com/app/index?redirectUrl=https://sun.com/detail?id=id
 * 以上🌰url 会出现2个?(问号) 从而会影响match匹配不准确，此种情况需要特殊处理
 * @param {String} [url] 默认为当前页面url
 * @return {Object} url参数
 */
export const getURLParameters = (url = window.location.href) =>
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce((params: any, pair) => {
    const [key, value] = pair.split('=');
    params[decodeURIComponent(key)] = decodeURIComponent(value);
    return params;
  }, {});

/**
 * 过滤空值, 处理列表params 分页参数（antd定义与后定义的入参不一直 处理下参数）
 * @param params
 *  argParams 请求参数
 *  transformMap = [['current', 'pageNo']] 将current转为pageNo服务端接收的入参
 */
export const handleRequestParams = (
  argParams: any = {},
  transformMap: Array<any> = []
) => {
  const params: any = { ...argParams };
  try {
    const ops: any = {};
    const pageParamsMap = new Map(transformMap);
    Object.keys(params).forEach((key) => {
      if (
        params[key] !== '' &&
        params[key] !== null &&
        params[key] !== undefined
      ) {
        const hasPageKeys: any = pageParamsMap.get(key);
        if (transformMap.length && hasPageKeys) {
          ops[hasPageKeys] = params[key];
          delete params[key];
        } else {
          ops[key] = params[key];
        }
      }
    });
    return ops;
  } catch (error) {
    throw new Error(error);
  }
};

// 前后空格reg
export const regTrim: RegExp = /^\s+|\s+$/;

/**
 * 检测变量类型
 * @param type
 * return () => boolean
 */
export const isType = (type: string): Function => {
  return (
    value:
      | object
      | Array<any>
      | Function
      | Number
      | String
      | undefined
      | null
      | Boolean
      | Symbol
  ): boolean => Object.prototype.toString.call(value) === `[object ${type}]`;
};

export const variableTypeDetection = {
  isNumber: isType('Number'),
  isString: isType('String'),
  isBoolean: isType('Boolean'),
  isNull: isType('Null'),
  isUndefined: isType('Undefined'),
  isSymbol: isType('Symbol'),
  isFunction: isType('Function'),
  isObject: isType('Object'),
  isArray: isType('Array'),
};
