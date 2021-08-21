import React, { FC, useMemo } from 'react'
import debounce from 'lodash.debounce'

interface SearcBarProps {
  keyword: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onDebounceChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchBar: FC<SearcBarProps> = ({
  keyword,
  onChange,
  onDebounceChange,
}: SearcBarProps): JSX.Element => {
  const onDebounceChanged = useMemo(() => {
    return debounce(onDebounceChange, 500)
  }, [])

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="mb-5">
        <input
          autoFocus={!keyword ? true : false}
          type="text"
          className="form-control"
          id="inputQuery"
          aria-describedby="queryHelp"
          placeholder="Search your fave giphy 💖..."
          value={keyword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            onChange(e)
            onDebounceChanged(e)
          }}
        />
        <div id="queryHelp" className="form-text">
          Input your giphy keyword to help us take off 🚀
        </div>
      </div>
    </form>
  )
}

export default SearchBar
