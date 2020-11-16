import React, { useEffect, useState } from 'react'
import ProjectPanel from './ProjectPanel'
import { Container } from 'reactstrap'
import Grid from '@material-ui/core/Grid'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import { makeStyles } from '@material-ui/core/styles'
import firebase from 'firebase'

const useStyles = makeStyles(theme => ({
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
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


export default function Portfolio(props) {
  const [currentPanel, setCurrentPanel] = useState("")
  const [panels, setPanels] = useState("")
  const [modalOpen, setModalOpen] = React.useState(false)

  const classes = useStyles()
  const db = firebase.firestore()

  const selectPanel = (panel) => {
    setCurrentPanel(panel)
    toggleModal()
  }

  const toggleModal = () => {
    setModalOpen(prev => !prev)
  }

  const getPanels = async () => {
    db.collection("panels").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setPanels(docs);
    });
  };

  const renderModal = () => {
    if (currentPanel) {
      return (
        <Dialog open={modalOpen} onClose={toggleModal} >
          <div>
            <DialogTitle id="simple-dialog-title">{currentPanel.title}
              <IconButton aria-label="close" className={classes.closeButton} onClick={toggleModal}>
                <CloseIcon />
              </IconButton></DialogTitle>
          </div>

          <DialogContent>
            <Typography gutterBottom>
              {currentPanel.desc}
            </Typography>
            <br />
            <Typography gutterBottom>
              {currentPanel.techUsed}
            </Typography>
          </DialogContent>
          <DialogActions>
            <a className={classes.social}
              href={props.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon color='action' />
            </a>
            <a className={classes.social}
              href={props.launch}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LaunchIcon color='action' />
            </a>
          </DialogActions>
        </Dialog>
      )
    }

  }

  useEffect(() => {
    getPanels();
  }, [currentPanel]);

  return (
    <Container>
      <Grid container
        spacing={2}
        style={{ marginTop: 50 }}
      >
        <div>{renderModal()}</div>

        {panels.length > 1 ?
          panels.map((panel) => {
            return (
              <Grid item key={panel.id}
                xs={12} md={6} lg={4}
                onClick={() => selectPanel(panel)}
              >
                <ProjectPanel
                  title={panel.title}
                  desc={panel.desc}
                  image={panel.image}
                  sourceCode={panel.sourceCode}
                  launch={panel.launch}
                />
              </Grid>
            )
          }) : <div></div>}
      </Grid>
    </Container >
  )
}