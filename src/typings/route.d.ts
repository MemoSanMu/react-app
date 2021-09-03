import { ComponentType } from 'react';
import { RouteComponentProps, StaticContext } from 'react-router-dom';

export interface RouteType {
  path: string;
  key: string;
  component:
    | ComponentType<any>
    | ComponentType<RouteComponentProps<any, StaticContext, unknown>>
    | undefined;
  exact?: boolean;
  name?: string;
  auth?: boolean;
  breadcrumbTitle?: string;
  icon?: boolean;
  subComponents?: RouteType[];
  transfer?: boolean;
}

interface RouteMapArray {
  [index: number]: RouteType[];
}
