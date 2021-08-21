import React, { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home: FC = (): JSX.Element => {
  useEffect(() => {
    document.title = '🏠 Reacting your Ghipy'
  }, [])

  return (
    <>
      <p className="col-xs-6 text-center">Decide your Giphy Mode! 👾</p>
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
