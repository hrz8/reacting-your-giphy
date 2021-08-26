import React, { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import GifLoading from '../components/gif/Loading'

const Home: FC = (): JSX.Element => {
  const [welcomeLoaded, setWelcomeLoaded] = useState(false)

  useEffect(() => {
    document.title = '🏠 Reacting your Ghipy'
  }, [])

  return (
    <>
      <h2 className="col-xs-6 text-center mb-5">Happy Reacting Giphy 🎊🎉</h2>
      <div className="card p-0 mb-5" style={{ width: '18rem' }}>
        <div className="row justify-content-center">
          <img
            src="https://i.giphy.com/media/XD9o33QG9BoMis7iM4/giphy.webp"
            alt="welcome"
            onLoad={() => setWelcomeLoaded(true)}
            style={{
              display: welcomeLoaded ? 'block' : 'none',
            }}
          />
          {!welcomeLoaded && <GifLoading />}
        </div>
      </div>
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
