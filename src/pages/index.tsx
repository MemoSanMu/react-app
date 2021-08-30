import React, { FC } from 'react';
import router from '@/routers';
import RouterView from '@/routers/router-view';

const RootRouter: FC = () => <RouterView router={router} />;

export default RootRouter;
