import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

/**
 * 渲染路由
 * @param router 路由配置数据
 */
const RouterView = ({ router }: any) => {
  const notEmpty = !!(router && Array.isArray(router) && router.length),
    isRedirect = notEmpty && router.filter((val: any) => val.redirect),
    RouteRedirect =
      (isRedirect &&
        isRedirect.length &&
        isRedirect.map((val: any) => (
          <Redirect
            exact={val.exact || false}
            from={val.path}
            key={val}
            to={val.redirect}
          />
        ))) ||
      [];
  return notEmpty ? (
    <Switch>
      {router
        .map((v: any) => {
          return (
            v.component && (
              <Route
                path={v.path}
                key={v.path}
                exact={v.exact || false}
                render={(api) => (
                  <v.component router={v.children || []} {...api}></v.component>
                )}
              />
            )
          );
        })
        .concat(RouteRedirect)}
    </Switch>
  ) : null;
};

export default RouterView;
