import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<<<<<<< HEAD
<<<<<<< HEAD
    <BrowserRouter basename="/week10">
      <App />
    </BrowserRouter>
=======
    <App />
>>>>>>> 966bbc0 (Went through the workshops for React and TailwindCSS so starting to make the app now.)
=======
    <BrowserRouter basename="/gratithink/app">
      <App />
    </BrowserRouter>
>>>>>>> b56e71c (Finished the app!!!)
  </StrictMode>,
)
