import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from './styles/globalStyles'
import theme from './styles/theme'

import ImagesSearch from './templates/ImagesSearch'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <ImagesSearch />
      </ThemeProvider>
    </Router>
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
)
