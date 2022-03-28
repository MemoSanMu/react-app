import React, { Suspense } from 'react';
import Loading from '@/publicComponents/base/Loading';
import RouterView from '@/routers/router-view/RouterView';

const Route = ({ router }: any) => (
  <Suspense fallback={<Loading />}>
    <RouterView router={router} />
  </Suspense>
);

export default Route;
