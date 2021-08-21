import React, { FC, useState } from 'react'

import { GiphyDataResponse } from '../../libs/giphy'
import GifLoading from './Loading'

interface GifListProps {
  gif: GiphyDataResponse
}

const GifItem: FC<GifListProps> = ({ gif }: GifListProps): JSX.Element => {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div className="card p-0" style={{ width: '18rem' }}>
      <img
        src={gif.images.downsized_medium.url}
        className="card-img-top"
        alt={gif.title}
        onLoad={() => setImageLoaded(true)}
        style={{
          display: imageLoaded ? 'block' : 'none',
          objectFit: 'cover',
          height: 180,
          cursor: 'pointer',
        }}
      />
      {!imageLoaded && <GifLoading />}
    </div>
  )
}

export default GifItem
