import React, { useState, useEffect } from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Container } from 'reactstrap'
import Header from './components/Header'
import { makeStyles } from '@material-ui/core/styles'
import Portfolio from './components/Portfolio'
import ReactGA from 'react-ga'
import { createBrowserHistory } from 'history'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Home from './views/Home'

const useStyles = makeStyles(theme => ({
  body: {
    width: '100%',
    minHeight: '100vh'
  }
}))

export default function App() {
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
    <Router>
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
            <Switch>
              <Route path="/blog">
                <h1>blog</h1>
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Container>
        </div>
      </ThemeProvider>
    </Router >
  )
}
