import React from 'react'
import Socials from './Socials'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyIcon from '@material-ui/icons/WbSunny'
import { Row, Col } from 'reactstrap'

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  row: {
      width: '100%'
  },
  hideOnMobile: {
    [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
  }
}))

export default function Header (props) {
  const classes = useStyles()

  function toggleDarkMode () {
    if (props.darkMode) {
      return (
        <WbSunnyIcon
          onClick={props.toggleDarkMode}
          variant='outlined'
          size='small'
        ></WbSunnyIcon>
      )
    } else {
      return (
        <Brightness2Icon
          onClick={props.toggleDarkMode}
          variant='outlined'
          size='small'
        ></Brightness2Icon>
      )
    }
  }

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Row className={classes.row}>
          <Col className={classes.hideOnMobile} sm='3'>{toggleDarkMode()}</Col>
          <Col sm='6' xs='12'>
            {' '}
            <Typography
              component='h2'
              variant='h5'
              color='inherit'
              align='center'
              noWrap
              className={classes.toolbarTitle}
            >
              George Ruellan
            </Typography>
          </Col>
          <Col className={classes.hideOnMobile} sm='3'>
            <Socials />
          </Col>
        </Row>
      </Toolbar>
    </React.Fragment>
  )
}
