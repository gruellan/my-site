import React, { useState } from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Container } from 'reactstrap'
import Header from './components/Header'
import { makeStyles } from '@material-ui/core/styles'
import Portfolio from './components/Portfolio'

const useStyles = makeStyles(theme => ({
  body: {
    width: '100%',
    height: '100vh'
  }
}))

export default function App () {
  const [darkMode, setDarkMode] = useState(true)

  const classes = useStyles()

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
            ? { backgroundImage: 'url(./assets/escheresque_ste.png)' }
            : { backgroundImage: 'url(./assets/escheresque.png' }
        }
      >
        <Container className={classes.body}>
          <Portfolio />
        </Container>
      </div>
    </ThemeProvider>
  )
}
