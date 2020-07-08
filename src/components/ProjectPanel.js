import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import GitHubIcon from '@material-ui/icons/GitHub'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345
  },
  img: {
    height: 200,
    width: '100%'
  }
}))

export default function ProjectPanel (props) {
  const classes = useStyles()
  const baseUrl = './../assets/'
  const imgUrl = baseUrl + props.image

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
          <Typography variant='body2' color='textSecondary' component='p'>
            {props.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ width: '100%', justifyContent: 'center' }}>
        <a className={classes.social} href='https://www.github.com/gruellan'>
          <GitHubIcon color='action' />
        </a>
      </CardActions>
    </Card>
  )
}
