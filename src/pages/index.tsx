import { FC, lazy } from 'react';
// import { Routes, Route, useRoutes } from 'react-router-dom';
import { useRoutes, Navigate } from 'react-router-dom';

const Frame = lazy(() => import('@/layouts/Frame')); // Frame
const Home = lazy(() => import('@/pages/Home')); // home
const Index = lazy(() => import('@/pages/IndexPage')); // 首页

// const RootRouter: FC = () => (
//   <Routes>
//     <Route path="/" element={<Frame />}>
//       <Route path="/" element={<Index />} />
//       <Route path="home" element={<Home />} />

//       {/* “*”在这里有特殊的含义。只有当没有其他路线匹配时，它才会匹配。 */}
//     </Route>
//     <Route
//       path="*"
//       element={
//         <main style={{ padding: '1rem' }}>
//           <p>There's nothing here!</p>
//         </main>
//       }
//     />
//   </Routes>
// );
const RootRouter: FC = () =>
  useRoutes([
    {
      path: '/',
      element: <Frame />,
      children: [
        {
          path: '/',
          element: <Navigate to="index" />,
        },
        {
          path: 'index',
          element: <Index />,
        },
        {
          path: 'home',
          element: <Home />,
          children: [
            {
              path: ':id',
              element: <div>id</div>,
            },
          ],
        },
      ],
    },

    {
      path: '*',
      element: (
        <main>
          <p>There's nothing here!</p>
        </main>
      ),
    },
  ]);

export default RootRouter;
