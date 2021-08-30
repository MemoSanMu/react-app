import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { basename } from '@/utils/config';
import RootRouter from '@/pages';

const App: FC = () => (
  <BrowserRouter basename={basename}>
    <RootRouter />
  </BrowserRouter>
);

export default App;
