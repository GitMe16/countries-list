import Country from 'views/Country'
import Error404 from 'views/Error404'
import Home from 'views/Home'

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
    component: Home,
  },
  Country: {
    label: 'country',
    path: '/country/:search',
    title: 'Country',
    component: Country,
  },
  Error404: {
    label: 'error-404',
    title: 'Error 404',
    component: Error404
  },
}

export const URLS = {
  Home: '/',
}
