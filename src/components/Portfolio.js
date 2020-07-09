import React from 'react'
import ProjectPanel from './ProjectPanel'
import { Container } from 'reactstrap'
import Grid from '@material-ui/core/Grid';

export default function Portfolio() {
  return (
    <Container>
      <Grid container
        spacing={2}
        style={{ marginTop: 50 }}
      >
        <Grid item xs={12} md={6} lg={4}>
          <ProjectPanel
            title='Campus Bites Ltd'
            desc='Co-founder and software developer of a food delivery service. Built a progressive web app 
          where users could order food to be delivered to their university accommodation. Technologies 
          used: VueJS Firebase.'
            image='campus_bites.png'
            sourceCode='#'
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <ProjectPanel
            title='Smirkin - Digital Photobooths'
            desc='Building and maintainng a photobooth app where customers
          at a venue can take selfies, apply filters and email it to themselves. Built using React Native.'
            image='smirkin.jpg'
            launch='https://www.smirkin.co.uk'
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <ProjectPanel
            title='Smirkin - Digital Photobooths'
            desc='Building and maintainng a photobooth app where customers
          at a venue can take selfies, apply filters and email it to themselves. Built using React Native.'
            image='smirkin.jpg'
            launch='https://www.smirkin.co.uk'
          />
        </Grid>
      </Grid>
    </Container >
  )
}