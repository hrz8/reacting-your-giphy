import React, { FC } from 'react'

import { GiphyDataResponse } from '../../libs/giphy'

interface GifListProps {
  gif: GiphyDataResponse
}

const GifItem: FC<GifListProps> = ({ gif }: GifListProps): JSX.Element => {
  return (
    <div className="card p-0" style={{ width: '18rem' }}>
      <img
        src={gif.images.downsized_medium.url}
        className="card-img-top"
        alt={gif.title}
      />
    </div>
  )
}

export default GifItem
