import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import Store from './lib/store/Store'
import DataContext from './lib/context/DataContext'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
      <DataContext>
        <App />
      </DataContext>
    </Provider>
  </StrictMode>,
)
