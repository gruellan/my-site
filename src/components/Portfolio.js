import React, { useEffect, useState } from 'react'
import ProjectPanel from './ProjectPanel'
import { Container } from 'reactstrap'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import firebase from 'firebase'

export default function Portfolio(props) {
  const [currentPanel, setCurrentPanel] = useState("")
  const [panels, setPanels] = useState("")
  const [modalToggle, setModaltoggle] = React.useState(false)

  const db = firebase.firestore()

  const closeModal = () => {
    setModaltoggle(prev => !prev)
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

  useEffect(() => {
    getPanels();
  }, []);

  return (
    <Container>
      <Grid container
        spacing={2}
        style={{ marginTop: 50 }}
      >
        {panels.length > 1 ?
          panels.map((panel, i) => {
            return (
              <Grid item
                xs={12} md={6} lg={4}
                onClick={closeModal}
              >
                <Dialog open={modalToggle} onClose={closeModal} >
                  <DialogTitle id="simple-dialog-title">hello</DialogTitle>
                </Dialog>
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