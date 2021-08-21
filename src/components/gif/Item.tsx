import React, { FC, useState } from 'react'

import { GiphyDataResponse } from '../../libs/giphy'
import GifLoading from './Loading'

interface GifListProps {
  gif: GiphyDataResponse
}

const GifItem: FC<GifListProps> = ({ gif }: GifListProps): JSX.Element => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [lightboxOpened, setLightboxOpened] = useState(false)

  return (
    <div className="card p-0" style={{ width: '18rem' }}>
      <img
        src={gif.images.downsized_medium.url}
        className="card-img-top"
        alt={gif.title}
        onLoad={() => setImageLoaded(true)}
        onClick={() => setLightboxOpened(true)}
        style={{
          display: imageLoaded ? 'block' : 'none',
          objectFit: 'cover',
          height: 180,
          cursor: 'pointer',
        }}
      />
      {!imageLoaded && <GifLoading />}
      {lightboxOpened && (
        <div className="lightbox">
          <a
            className="lightbox-close-button"
            onClick={() => setLightboxOpened(false)}
          >
            &times;
          </a>
          <img src={gif.images.original.url} />
        </div>
      )}
    </div>
  )
}

export default GifItem
