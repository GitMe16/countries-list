import { Loader } from 'components'
import { PathItem, Paths } from 'constants/routes'
import React, { Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'styles/css/app.css'

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
              key={label}
              path={path ? path : undefined}
            >
              <Suspense
                fallback={
                  <Loader
                    bottomClass="spinner-wrapper"
                    className="page-loader flex align-center justify-center"
                    size="large"
                  >
                  <div className="page-spinner">
                      Packing our bags...
                    </div>
                  </Loader>
                }
              >
                <Component />
              </Suspense>
            </Route>
          )
        })}
      </Switch>
    </BrowserRouter>
  )
}

export default App
