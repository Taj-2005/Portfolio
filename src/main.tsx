import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import StarsCanvas from './components/main/StarBackground'
import './styles.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StarsCanvas />
    <App />
  </StrictMode>,
)
