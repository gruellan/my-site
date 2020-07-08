import React, { useState } from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Container } from 'reactstrap'
import Header from './components/Header'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  body: {
    width: '100%',
    height: '100vh'
  }
}))

function App () {
  const [darkMode, setDarkMode] = useState(true)

  const classes = useStyles()
  const darkBackground = require('./assets/escheresque_ste.png')
  const whiteBackground = require('./assets/escheresque.png')

  function toggleDarkMode () {
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
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <div
        style={
          darkMode
            ? { backgroundImage: 'url(' + darkBackground + ')' }
            : { backgroundImage: 'url(' + whiteBackground + ')' }
        }
      >
        <Container className={classes.body}>hello</Container>
      </div>
    </ThemeProvider>
  )
}

export default App
