import React, { FC } from 'react'

const AlertFailed: FC = (): JSX.Element => {
  return (
    <div className="alert alert-danger" role="alert">
      Sorry, we are facing a failure while fetching your giphy(s), maybe you can
      try again later 😿
    </div>
  )
}

export default AlertFailed
