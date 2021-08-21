import React, { FC } from 'react'

interface SearcBarProp {
  keyword: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchBar: FC<SearcBarProp> = ({
  keyword,
  onChange,
}: SearcBarProp): JSX.Element => {
  return (
    <form>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="inputQuery"
          aria-describedby="queryHelp"
          placeholder="Search giphy..."
          value={keyword || ''}
          onChange={onChange}
        />
        <div id="queryHelp" className="form-text">
          Input your giphy keyword to help us take off 🚀
        </div>
      </div>
    </form>
  )
}

export default SearchBar
