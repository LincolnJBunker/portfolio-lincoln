import React from 'react'
// import './App.css'
import { AppRoutes } from './routes'
import { BrowserRouter } from 'react-router-dom'
import { AppNavbar } from './components/Navbar'

function App() {

  return (
    <React.Fragment>
      <BrowserRouter basename="/portfolio-lincoln">
        <AppNavbar />
        <AppRoutes />
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
