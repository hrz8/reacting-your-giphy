import React, { FC, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SearchBar from '../components/SearchBar'

const useQuery = () => new URLSearchParams(useLocation().search)

const Search: FC = (): JSX.Element => {
  const keywordQuery = useQuery()
  const [keywordUser, setKeywordUser] = useState<string>(
    keywordQuery.get('q') || ''
  )

  return (
    <>
      <SearchBar
        keyword={keywordUser || ''}
        onChange={(e) => setKeywordUser(e.target.value)}
      />
    </>
  )
}

export default Search
