import React from 'react'
import './App.css'
import { AppRoutes } from './routes'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <React.Fragment>
      <BrowserRouter basename="/portfolio-lincoln">
        <AppRoutes />
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
