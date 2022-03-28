import React from 'react';
import RouterView from '@/routers/router-view';
import { subPages } from '@/routers';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './index.module.less';

const cx = classNames.bind(styles);

function Frame(props: any) {
  return (
    <div className={cx('wraper-container')}>
      <div className={cx('header')}>
        <NavLink to="/index">瀑布流列表</NavLink>
        <NavLink to="/home">home</NavLink>
      </div>
      <RouterView router={subPages} />
    </div>
  );
}

export default Frame;
