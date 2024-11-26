import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { Details } from './pages/Details/index.jsx'
import Globalstyles from './styles/globalstyles.js'
import theme from "./styles/theme.js"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Globalstyles/>
      <Details/>
    </ThemeProvider>
  </StrictMode>
)
