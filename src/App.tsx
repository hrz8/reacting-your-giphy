import React, { FC } from 'react'
import './App.css'

const App: FC = () => {
  return (
    <div className="App">
      <header className="App-content">
        <p>Please choose your desire!</p>
        <p>
          <button type="button">Search Your Giphy</button>
          <button type="button">Iron Man Giphy</button>
        </p>
      </header>
    </div>
  )
}

export default App
