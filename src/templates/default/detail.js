import React from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { withStore, EmptyTemplate } from 'freenit'

// Components
import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@material-ui/core'

// Icons
import CloseIcon from '@material-ui/icons/Clear'
import DashboardIcon from '@material-ui/icons/Dashboard'
import LoginIcon from '@material-ui/icons/Input'
import LogoutIcon from '@material-ui/icons/PowerSettingsNew'
import ProfileIcon from '@material-ui/icons/AccountCircle'
import RoleIcon from '@material-ui/icons/People'
import UserIcon from '@material-ui/icons/PeopleOutline'

import styles from './styles'


class Template extends React.Component {
  state = {
    showMenu: false,
    anchor: null,
  }

  handleLogout = async () => {
    const { auth  } = this.props.store
    const response = await auth.logout()
    if (response.ok === undefined) {
      this.props.history.push('/')
    }
  }

  handleMenuOpen = () => {
    this.setState({ showMenu: true })
  }

  handleMenuClose = () => {
    this.setState({ showMenu: false })
  }

  openMenu = (event) => {
    this.setState({ anchor: event.currentTarget })
  }

  closeMenu = () => {
    this.setState({ anchor: null })
  }

  render() {
    const { auth, profile } = this.props.store
    const AnonButton = (
      <Link to="/login" style={styles.login}>
        <IconButton>
          <LoginIcon />
        </IconButton>
      </Link>
    )
    const LoggedinButton = (
      <IconButton onClick={this.handleLogout}>
        <LogoutIcon />
      </IconButton>
    )
    const AuthButton = auth.detail.ok ? LoggedinButton : AnonButton
    const AdminMenu = profile.detail.admin
      ? [
        (
          <Link to="/dashboard" key="dashboard">
            <MenuItem>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              Dashboard
            </MenuItem>
          </Link>
        ),
        (
          <Link to="/users" key="users">
            <MenuItem>
              <ListItemIcon>
                <UserIcon />
              </ListItemIcon>
              Users
            </MenuItem>
          </Link>
        ),
        (
          <Link to="/roles" key="roles">
            <MenuItem>
              <ListItemIcon>
                <RoleIcon />
              </ListItemIcon>
              Roles
            </MenuItem>
          </Link>
        ),
      ] : []
    const LoggingMenu = auth.detail.ok
      ? (
        <MenuItem onClick={this.handleLogout}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          Logout
        </MenuItem>
      ) : (
        <Link to="/login">
          <MenuItem>
            <ListItemIcon>
              <LoginIcon />
            </ListItemIcon>
            Login
          </MenuItem>
        </Link>
      )
    const AuthMenu = auth.detail.ok
      ? [
        (
          <Link to="/profile" key="profile">
            <MenuItem>
              <ListItemIcon>
                <ProfileIcon />
              </ListItemIcon>
              Profile
            </MenuItem>
          </Link>
        ),
        ...AdminMenu,
      ]
      : null
    return (
      <div>
        <AppBar position="sticky">
          <Toolbar style={{ backgroundColor: "#4ab969" }}>
            <Typography variant="h5" color="inherit" style={styles.flex}>
              <Link to="/">
                <Button style={{ color: "white" }}>
                  Početna
                </Button>
              </Link>
              <Button style={{ color: "white" }} onClick={this.openMenu}>
                potpisi
              </Button>
              <Menu
                keepMounted
                anchorEl={this.state.anchor}
                open={Boolean(this.state.anchor)}
                onClose={this.closeMenu}
              >
                <Link to="/medics">
                  <MenuItem>Medics</MenuItem>
                </Link>
                <Link to="/socials">
                  <MenuItem>Social Workers</MenuItem>
                </Link>
              </Menu>
              <Button style={{ color: "white" }}>
                pridruži se
              </Button>
              <Link to="/apel">
                <Button style={{ color: "white" }}>
                  Apel Građanstvu
                </Button>
              </Link>
            </Typography>
            {AuthButton}
          </Toolbar>
        </AppBar>
        <EmptyTemplate.detail secure={this.props.secure} style={this.props.style}>
          {this.props.children}
          <Drawer open={this.state.showMenu} onClose={this.handleMenuClose}>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h5" color="inherit" style={styles.flex}>
                  &nbsp;
                </Typography>
                <IconButton color="inherit" onClick={this.handleMenuClose}>
                  <CloseIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
            <div
              role="button"
              onClick={this.handleMenuClose}
              style={styles.menu}
              tabIndex={0}
              onKeyDown={this.handleMenuClose}
            >
              {AuthMenu}
              {LoggingMenu}
            </div>
          </Drawer>
        </EmptyTemplate.detail>
      </div>
    )
  }
}


Template.propTypes = {
  children: PropTypes.node,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  secure: PropTypes.bool,
  style: PropTypes.shape({}),
  title: PropTypes.string,
}


export default withRouter(withStore(Template))

