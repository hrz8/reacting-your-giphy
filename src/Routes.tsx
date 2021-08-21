import React, { FC } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
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
    </Switch>
  )
}

export default Routes
