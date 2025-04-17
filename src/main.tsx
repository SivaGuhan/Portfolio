import { createRoot } from 'react-dom/client'
import { AppProvider } from './store/AppContext'
import './styles/index.scss'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <AppProvider>
    <App />
  </AppProvider>,
)
