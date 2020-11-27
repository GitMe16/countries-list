import React, { lazy } from 'react'

export interface PathItem {
  label: string
  path?: string
  title: string
  component: React.FunctionComponent<{}>
}

export const Paths: {[index: string]: PathItem} = {
  Home: {
    label: 'home',
    path: '/',
    title: 'Home',
    component: lazy(() => import('views/Home')),
  },
  Country: {
    label: 'country',
    path: '/country/:search',
    title: 'Country',
    component: lazy(() => import('views/Country')),
  },
  Error404: {
    label: 'error-404',
    title: 'Error 404',
    component: lazy(() => import('views/Error404')),
  },
}

export const URLS = {
  Home: '/',
}
