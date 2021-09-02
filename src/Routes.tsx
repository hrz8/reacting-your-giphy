import React, { FC } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Page404 from './pages/Page404'
import Search from './pages/Search'

const Routes: FC = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/search">
        <Search />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route>
        <Page404 />
      </Route>
    </Switch>
  )
}

export default Routes
