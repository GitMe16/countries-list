import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { PathItem, Paths } from 'constants/routes'

const App: React.FunctionComponent<any> = () => {
  const routes = Object.values(Paths)
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((item: PathItem) => {
          const { label, path, component: Component } = item
          return (
            <Route
              exact={label === 'error-404' ? false : true}
              path={path ? path : undefined}
            >
              <Component />
            </Route>
          )
        })}
      </Switch>
    </BrowserRouter>
  )
}

export default App
