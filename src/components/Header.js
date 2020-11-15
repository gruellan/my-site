import React, { useState } from 'react'
import Socials from './Socials'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyIcon from '@material-ui/icons/WbSunny'
import { Row, Col } from 'reactstrap'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    opacity: 1.0
  },
  row: {
    width: '100%'
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


  function toggleDarkMode() {
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
    <div>
      <Navbar style={
        props.darkMode
          ? { backgroundColor: '#353535' }
          : { backgroundColor: '#e8e8e8' }
      } expand="md">
        <NavbarBrand href="/">George Ruellan</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/blog">Blog</NavLink>
            </NavItem>
            <NavItem>
            </NavItem>
          </Nav>
          <NavbarText>{toggleDarkMode()}</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  )
}
