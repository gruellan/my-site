import React, { useState } from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from './components/Header'
import { dark } from '@material-ui/core/styles/createPalette'

function App () {
  const [darkMode, setDarkMode] = useState(true)

  function toggleDarkMode () {
    console.log('h')
    setDarkMode(previousValue => {
      return !previousValue
    })
  }

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: darkMode ? 'dark' : 'light'
        }
      }),
    [darkMode]
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className='App'>
        <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      </div>
    </ThemeProvider>
  )
}

export default App
