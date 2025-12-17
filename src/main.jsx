import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductsContextProvider from'../src/Context/ProductsContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductsContextProvider>
      <App />
    </ProductsContextProvider>
  </StrictMode>,
)
