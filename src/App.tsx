import { FC, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { basename } from '@/utils/config';
import RootRouter from '@/pages';

import Loading from '@/publicComponents/base/Loading';

const App: FC = () => (
  <BrowserRouter basename={basename}>
    <Suspense fallback={<Loading />}>
      <RootRouter />
    </Suspense>
  </BrowserRouter>
);

export default App;
