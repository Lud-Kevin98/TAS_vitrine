import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { LangProvider } from './i18n'
import App from './App'

// Polices hébergées localement (RGPD — aucun appel à Google Fonts)
import '@fontsource/plus-jakarta-sans/400.css'
import '@fontsource/plus-jakarta-sans/500.css'
import '@fontsource/plus-jakarta-sans/600.css'
import '@fontsource/plus-jakarta-sans/700.css'
import '@fontsource/plus-jakarta-sans/800.css'
import '@fontsource/space-grotesk/400.css'
import '@fontsource/space-grotesk/500.css'
import '@fontsource/space-grotesk/600.css'
import '@fontsource/space-grotesk/700.css'
import '@fontsource/jetbrains-mono/400.css'
import '@fontsource/jetbrains-mono/500.css'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode><BrowserRouter><LangProvider><App /></LangProvider></BrowserRouter></React.StrictMode>
)
