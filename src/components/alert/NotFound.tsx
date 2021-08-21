import React, { FC } from 'react'

const AlertNotFound: FC = (): JSX.Element => {
  return (
    <div className="alert alert-danger" role="alert">
      Your keyword doesn&apos;t fit with any giphy(s), you can try with another
      keyword 🤡
    </div>
  )
}

export default AlertNotFound
