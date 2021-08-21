import React, { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home: FC = (): JSX.Element => {
  useEffect(() => {
    document.title = '🏠 Reacting your Ghipy'
  }, [])

  return (
    <>
      <h2 className="col-xs-6 text-center mb-5">Happy Reacting Giphy 🎊🎉</h2>
      <span className="col-xs-6 text-center mb-3">
        Decide your Giphy Mode right now! <b className="h2">👾</b>
      </span>
      <div className="text-center">
        <Link to="/search" className="btn btn-primary m-2">
          Search Your Giphy 🕵️‍♂️
        </Link>
        <Link to="/search?q=iron+man" className="btn btn-primary m-2">
          Iron Man Giphy 🦾🤖
        </Link>
      </div>
    </>
  )
}

export default Home
