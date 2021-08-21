import React, { FC } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './Routes'

const App: FC = (): JSX.Element => {
  return (
    <Router>
      <div className="container mt-5">
        <div className="row justify-content-md-center">
          <Routes />
        </div>
      </div>
    </Router>
  )
}

export default App
