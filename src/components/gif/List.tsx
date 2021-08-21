import React, { FC } from 'react'

import { GiphyDataResponse, GiphyPaginationResponse } from '../../libs/giphy'
import GifItem from './Item'

interface GifListProps {
  data: GiphyDataResponse[]
  pagination: GiphyPaginationResponse
}

const GifList: FC<GifListProps> = ({
  data,
  pagination,
}: GifListProps): JSX.Element => {
  return (
    <>
      <span className="mb-3 text-center">
        Result found: {pagination.count} from {pagination.total_count} 🎉
      </span>
      {data.map((gif) => (
        <GifItem gif={gif} key={gif.id} />
      ))}
    </>
  )
}

export default GifList
