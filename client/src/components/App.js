import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { render } from 'react-dom'
// import Home from './Home';

const App = () => {
  return (
    <div>django configured</div>
  )
}

const appDiv = document.getElementById("app");
render(<App />, appDiv)

export default App