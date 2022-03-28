import React, { FC } from 'react';
import MasonryInfiniteGrid from '@/publicComponents/basic/MasonryInfiniteGrid';
import classNames from 'classnames/bind';
import styles from './index.module.less';

const cx = classNames.bind(styles);

const Home: FC = () => (
  <div className={cx('cls')}>
    <MasonryInfiniteGrid />
  </div>
);

export default Home;
