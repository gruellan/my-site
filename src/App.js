import React, { useState, useEffect } from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Container } from 'reactstrap'
import Header from './components/Header'
import { makeStyles } from '@material-ui/core/styles'
import Portfolio from './components/Portfolio'
import ReactGA from 'react-ga'
import { createBrowserHistory } from 'history'
import firebase from 'firebase'

const useStyles = makeStyles(theme => ({
  body: {
    width: '100%',
    minHeight: '100vh'
  }
}))

export default function App() {
  var database = firebase.database();

  // Initialise Google Analytics 
  ReactGA.initialize(process.env.REACT_APP_GA_ID)
  const browserHistory = createBrowserHistory()
  browserHistory.listen((location, action) => {
    ReactGA.pageview(location.pathname + location.search)
  })

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  const [darkMode, setDarkMode] = useState(true)
  const classes = useStyles()

  function toggleDarkMode() {
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
      <div
        style={
          darkMode
            ? { backgroundImage: 'url(./assets/escheresque_ste.png)' }
            : { backgroundImage: 'url(./assets/escheresque.png' }
        }
      >
        <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <Container className={classes.body}>
          <Portfolio />
        </Container>
      </div>
    </ThemeProvider>
  )
}
