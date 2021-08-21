import React, { FC, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import useFetch from 'react-fetch-hook'

import Breadcrumb from '../components/Breadcrumb'
import SearchBar from '../components/SearchBar'
import AlertFailed from '../components/alert/Failed'
import AlertNotFound from '../components/alert/NotFound'

import giphy from '../libs/giphy'

const useQuery = () => new URLSearchParams(useLocation().search)

const Search: FC = (): JSX.Element => {
  useEffect(() => {
    document.title = '🔍 Reacting your Ghipy'
  }, [])

  const keywordQuery = useQuery()
  const [keywordUser, setKeywordUser] = useState<string>(
    keywordQuery.get('q') || ''
  )
  const [finalQuery, setFinalQuery] = useState<string>(keywordUser)

  const giphyEndpoint = giphy.endpointGenerator({
    api_key: import.meta.env.VITE_GIPHY_API_KEY,
    q: finalQuery,
    limit: 9,
  })
  const { isLoading, error, data } = useFetch<{ data: Array<{ id: string }> }>(
    giphyEndpoint,
    {
      depends: [!!finalQuery],
    }
  )

  let Alert = <div />
  if (isLoading) {
    Alert = (
      <div className="spinner-border text-center" role="status">
        <span className="visually-hidden">Loading ⏳ ...</span>
      </div>
    )
  } else if (error) {
    Alert = <AlertFailed />
  } else if (data && !data.data.length) {
    Alert = <AlertNotFound />
  }

  return (
    <>
      <div className="col-md-8 col-xs-6">
        <Breadcrumb />
        <SearchBar
          keyword={keywordUser || ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setKeywordUser(e.target.value)
          }}
          onDebounceChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setFinalQuery(e.target.value)
          }}
        />
      </div>
      <div className="row justify-content-md-center">{Alert}</div>
    </>
  )
}

export default Search
