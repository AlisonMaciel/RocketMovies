import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { Routes } from './routes/index.jsx'
import { AuthProvider } from './hooks/auth.jsx'
import Globalstyles from './styles/globalstyles.js'
import theme from "./styles/theme.js"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Globalstyles/>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
)
