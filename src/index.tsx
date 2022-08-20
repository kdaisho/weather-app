import { createRoot } from 'react-dom/client'
import './styles/reset.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(<App />)
reportWebVitals()
