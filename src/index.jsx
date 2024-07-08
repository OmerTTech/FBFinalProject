import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { NavProvider } from './contexts/NavContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <NavProvider>
    <App />
  </NavProvider>,
)
