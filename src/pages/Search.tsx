import React, { FC, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import useFetch from 'react-fetch-hook'

import Breadcrumb from '../components/Breadcrumb'
import SearchBar from '../components/SearchBar'
import qs from 'qs'

const useQuery = () => new URLSearchParams(useLocation().search)

const GIPHY_API_URL = 'https://api.giphy.com/v1'

interface GiphyQueryParams {
  api_key: string
  q: string
  limit: number
  offset: number
  rating: string
  lang: string
}

const stringifyQuery = (q: string, apiKey: string): string => {
  const params: GiphyQueryParams = {
    api_key: apiKey,
    q,
    limit: 9,
    offset: 0,
    rating: 'g',
    lang: 'en',
  }
  return qs.stringify(params, {
    encodeValuesOnly: true,
  })
}

const Search: FC = (): JSX.Element => {
  useEffect(() => {
    document.title = '🔍 Reacting your Ghipy'
  }, [])

  const keywordQuery = useQuery()
  const [keywordUser, setKeywordUser] = useState<string>(
    keywordQuery.get('q') || ''
  )
  const [finalQuery, setFinalQuery] = useState<string>(keywordUser)

  const { isLoading, error, data } = useFetch<{ data: Array<{ id: string }> }>(
    `${GIPHY_API_URL}/gifs/search?${stringifyQuery(
      finalQuery,
      import.meta.env.VITE_GIPHY_API_KEY
    )}`,
    {
      depends: [!!finalQuery],
    }
  )

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
      <div className="row justify-content-md-center">
        {isLoading && (
          <div className="spinner-border text-center" role="status">
            <span className="visually-hidden">Loading ⏳ ...</span>
          </div>
        )}
        {error && (
          <div className="alert alert-danger" role="alert">
            Sorry, we are facing a failure while fetching your giphy(s), maybe
            you can try again later 😿
          </div>
        )}
        {data && !data.data.length && (
          <div className="alert alert-danger" role="alert">
            Your keyword doesn&apos;t fit with any giphy(s), you can try with
            another keyword 🤡
          </div>
        )}
      </div>
    </>
  )
}

export default Search
