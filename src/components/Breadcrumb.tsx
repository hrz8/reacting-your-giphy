import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const Breadcrumb: FC = (): JSX.Element => {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">🏠 Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            🔍 Search
          </li>
        </ol>
      </nav>
    </>
  )
}

export default Breadcrumb
