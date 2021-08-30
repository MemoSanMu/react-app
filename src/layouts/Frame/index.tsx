import React from 'react';
import RouterView from '@/routers/router-view';
import { subPages } from '@/routers';
import { NavLink } from 'react-router-dom';

function Frame(props: any) {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <NavLink to="/index">index</NavLink>
        <NavLink to="/home">home</NavLink>
      </div>
      <RouterView router={subPages} />
    </div>
  );
}

export default Frame;
