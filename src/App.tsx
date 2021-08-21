import React, { FC } from 'react'
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom'

const useQuery = () => new URLSearchParams(useLocation().search)

const App: FC = (): JSX.Element => {
  return (
    <Router>
      <div className="container mt-5">
        <div className="row justify-content-md-center">
          <p className="col-6 text-center">Please choose your Giphy Mode!</p>
        </div>
        <div className="row justify-content-md-center">
          <div className="text-center">
            <Link to="/search" className="btn btn-primary m-2">
              Search Your Giphy
            </Link>
            <Link to="/search?q=iron%20man" className="btn btn-primary m-2">
              Iron Man Giphy
            </Link>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
