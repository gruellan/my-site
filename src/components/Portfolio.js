import React, { useState } from 'react'
import ProjectPanel from './ProjectPanel'
import { Container } from 'reactstrap'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'

export default function Portfolio(props) {
  const [currentPanel, setCurrentPanel] = useState("")
  const [modalToggle, setModaltoggle] = React.useState(false)

  const panels = [
    {
      id: 1,
      title: 'Campus Bites',
      desc: 'Co-founder and software developer of a food delivery service. Built a progressive web app where users could order food to be delivered to their university accommodation. Technologies used: VueJS & Firebase.',
      image: 'campus_bites_new.png',
      sourceCode: 'https://github.com/gruellan/campus-bites-website',
      launch: 'https://campus-bites-ltd.web.app/'
    },
    {
      id: 2,
      title: 'Smirkin - Digital Photobooths',
      desc: 'Building and maintainng a photobooth app where customers at a venue can take selfies, apply filters and email it to themselves. Built using React Native.',
      image: 'smirkin.jpg',
      sourceCode: '',
      launch: 'https://www.smirkin.co.uk'
    },
    {
      id: 2,
      title: 'CRUD Database',
      desc: 'This is a small PHP project where I created a CRUD database for books. You can search the database and also see a graph showing the number of books released each year. Built using PHP and MySQL.',
      image: 'crud_db.png',
      sourceCode: 'https://github.com/gruellan/library-crud-database',
      launch: 'https://projects.georgeruellan.com/library-crud-database/index.php'
    },
    
  ]

  const closeModal = () => {
    setModaltoggle(prev => !prev)
  }

  return (
    <Container>
      <Dialog open={modalToggle} onClose={closeModal} >
        <DialogTitle id="simple-dialog-title">HELLO</DialogTitle>
      </Dialog>
      <Grid container
        spacing={2}
        style={{ marginTop: 50 }}
      >
        {panels.map((panel, i) => {
          return (
            <Grid item
              xs={12} md={6} lg={4}
              onClick={closeModal}
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
        })}
      </Grid>
    </Container >
  )
}