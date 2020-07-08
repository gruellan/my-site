import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { Row, Col } from 'reactstrap'


const useStyles = makeStyles(theme => ({
  container: {
    align: 'right'
  },
  social: {
    margin: '0 0.5rem',
    transition: 'transform 250ms',
    display: 'inline-block',
    '&:hover': {
      transform: 'translateY(-3px)'
    }
  }
}))

function Socials () {
  const classes = useStyles()

  return (
    <Row className="float-right">
      <Link className={classes.social} href='https://www.github.com/gruellan'>
        <GitHubIcon color='action' />
      </Link>{' '}
      <Link
        className={classes.social}
        href='https://www.linkedin.com/in/georgeruellan/'
      >
        <LinkedInIcon color='action' />
      </Link>
    </Row>
  )
}

export default Socials
