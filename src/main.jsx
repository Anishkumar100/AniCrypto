import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from "../src/hooks/ScrollToTop.jsx"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ScrollToTop/>
     <App />
 
    
    </BrowserRouter>
    
  </StrictMode>,
)
