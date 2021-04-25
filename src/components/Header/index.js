import {
  AppBar,
  Button,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Toolbar,
  Typography
} from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { logout } from 'features/Auth/userSlice'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  link: {
    color: 'white'
  }
}))

export default function Header({ isLoggedIn }) {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const dispatch = useDispatch()

  const handleShowMenu = (e) => {
    setAnchorEl(e.currentTarget)
  }

  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  const handleLogoutClick = () => {
    const action = logout()
    dispatch(action)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <NavLink className={classes.link} to="/">
              P - Shop
            </NavLink>
          </Typography>
          {!isLoggedIn ? (
            <ul>
              <NavLink className={classes.link} to="/sign-up">
                <Button color="inherit">Sign Up</Button>
              </NavLink>
              <NavLink className={classes.link} to="/sign-in">
                <Button color="inherit">Sign In</Button>
              </NavLink>
            </ul>
          ) : (
            <>
              <IconButton color="inherit" onClick={handleShowMenu}>
                <AccountCircleIcon />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left'
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                getContentAnchorEl={null}
              >
                <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
                <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
              </Menu>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}
