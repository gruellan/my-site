import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
// import Brightness2Icon from '@material-ui/icons/Brightness2'
// import WbSunnyIcon from '@material-ui/icons/WbSunny'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const useStyles = makeStyles(theme => ({
  text: {
    color: 'white',
    transition: 'transform 250ms',
    '&:hover': {
      color: 'white',
      transform: 'scale(1.05)'
    }
  },
  hideOnMobile: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  }
}))

export default function Header(props) {
  const classes = useStyles()

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  // function toggleDarkMode() {
  //   if (props.darkMode) {
  //     return (
  //       <WbSunnyIcon
  //         onClick={props.toggleDarkMode}
  //         variant='outlined'
  //         size='small'
  //       ></WbSunnyIcon>
  //     )
  //   } else {
  //     return (
  //       <Brightness2Icon
  //         onClick={props.toggleDarkMode}
  //         variant='outlined'
  //         size='small'
  //       ></Brightness2Icon>
  //     )
  //   }
  // }

  return (
    <div>
      <Navbar
        dark
        expand="md"
        style={
          props.darkMode
            ? { backgroundColor: '#353535' }
            : { backgroundColor: '#e8e8e8' }
        } >
        <NavbarBrand href="/" className={classes.text}>George Ruellan</NavbarBrand>
        <NavbarToggler
          style={{ color: "#FFF" }}
          onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/blog">Blog</NavLink>
            </NavItem>
            <NavItem>
            </NavItem>
          </Nav>
          {/* <NavbarText>{toggleDarkMode()}</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  )
}
