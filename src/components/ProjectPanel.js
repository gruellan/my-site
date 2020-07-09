import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import { Row } from 'reactstrap'
import TextTruncate from 'react-text-truncate';

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 350,
  },
  img: {
    height: 200,
    width: '100%'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 0
  },
  social: {
    margin: 10,
    bottom: 0
  },
}))

export default function ProjectPanel(props) {
  const classes = useStyles()
  const baseUrl = './../assets/'
  const imgUrl = baseUrl + props.image

  function renderLinks() {
    if (props.sourceCode && props.launch) {
      return (
        <Row className={classes.row}>
          <a
            className={classes.social}
            href='https://www.github.com/gruellan'
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon color='action' />
          </a>
          <a
            className={classes.social}
            href={props.launch}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LaunchIcon color='action' />
          </a>
        </Row>
      )
    } else if (props.launch != null) {
      return (
        <a
          className={classes.social}
          href={props.launch}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LaunchIcon color='action' />
        </a>
      )
    } else if (props.sourceCode != null) {
      return (
        <a
          className={classes.social}
          href={props.sourceCode}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon color='action' />
        </a>
      )
    }

  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component='img'
          className={classes.img}
          alt={props.title}
          image={imgUrl}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {props.title}
          </Typography>
          <TextTruncate
            text={props.desc}
            line={3}
            element="span"
            truncateText="…"
            variant='body2'
            color='textSecondary'
            component='p'
            className={classes.desc}
          />
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing
        style={{ width: '100%', justifyContent: 'center' }}
        className='mt-auto'
      >
        {renderLinks()}
      </CardActions>
    </Card>
  )
}
