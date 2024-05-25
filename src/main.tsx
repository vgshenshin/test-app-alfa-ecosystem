import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/App.tsx'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
