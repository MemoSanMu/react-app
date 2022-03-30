import React, { FC } from 'react';
import { Button } from 'antd-mobile';
import { Outlet, useParams, useLocation, useNavigate } from 'react-router-dom';

const Home: FC = () => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  console.log(params, 'params');
  console.log(location, 'location');

  return (
    <div>
      <h4> this is home page</h4>
      <Button
        color="primary"
        size="mini"
        onClick={() => navigate('/home/123456?id=13')}
      >
        Button
      </Button>
      <Outlet />
    </div>
  );
};

export default Home;
