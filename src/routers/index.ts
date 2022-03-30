import { lazy } from 'react';
const Frame = lazy(() => import('@/layouts/Frame')); // Frame
const Home = lazy(() => import('@/pages/Home')); // home
const Index = lazy(() => import('@/pages/IndexPage')); // 首页

export const subPages = [
  {
    path: '/index',
    key: '/index',
    component: Index,
  },
  {
    path: '/home',
    key: '/home',
    component: Home,
  },
];

// 整合一级路由页面
export const routers = [
  // ...errorConfig, // 注意此处异常页面必须放在最前方定义，并且全量匹配
  {
    path: '/',
    key: '/',
    component: Frame,
    redirect: '/index',
  },
  // ...handleRedirectNoMatching(), // 每级路由都需要添加404匹配地址
];

export default routers;
