import React, { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import GifLoading from '../components/gif/Loading'

const Page404: FC = (): JSX.Element => {
  const [gif404Loaded, setGif404Loaded] = useState(false)

  useEffect(() => {
    document.title = '☠️ Not Found'
  }, [])

  return (
    <>
      <h2 className="col-xs-6 text-center mb-5">Page Not Found 👀</h2>
      <div className="card p-0 mb-5" style={{ width: '18rem' }}>
        <div className="row justify-content-center">
          <img
            src="https://media1.giphy.com/media/YyKPbc5OOTSQE/giphy.webp"
            alt="welcome"
            onLoad={() => setGif404Loaded(true)}
            style={{
              display: gif404Loaded ? 'block' : 'none',
            }}
          />
          {!gif404Loaded && <GifLoading />}
        </div>
      </div>
      <div className="text-center">
        <Link to="/" className="btn btn-primary m-2">
          Take me home please 😳
        </Link>
      </div>
    </>
  )
}

export default Page404
