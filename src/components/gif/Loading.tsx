import React, { FC } from 'react'

const GifLoading: FC = (): JSX.Element => {
  return (
    <div
      style={{
        height: 180,
        display: 'grid',
        placeItems: 'center',
        backgroundColor: '#c7c7c7',
      }}
    >
      <div
        className="spinner-grow text-secondary"
        style={{
          width: '3rem',
          height: '3rem',
        }}
        role="status"
      >
        <span className="visually-hidden">Loading ⏳ ...</span>
      </div>
    </div>
  )
}

export default GifLoading
