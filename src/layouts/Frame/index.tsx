import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './index.module.less';

const cx = classNames.bind(styles);

function Frame(props: any) {
  return (
    <div className={cx('wraper-container')}>
      <div className={cx('header')}>
        <NavLink
          to="/index"
          className={({ isActive }) => (isActive ? cx('red') : '')}
        >
          瀑布流列表
        </NavLink>
        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? cx('red') : '')}
        >
          home
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default Frame;
