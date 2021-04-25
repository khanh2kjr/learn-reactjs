import {
  AppBar,
  Box,
  Button,
  Dialog,
  DialogActions,
  makeStyles,
  Toolbar,
  Typography
} from '@material-ui/core'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import { ModeSign } from 'constants/mode-sign'
import Login from 'features/Auth/components/Login'
import Register from 'features/Auth/components/Register'
import React, { useState } from 'react'
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
  },
  logged: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  redirect: {
    textTransform: 'unset'
  }
}))

export default function Header({ isLoggedIn }) {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [mode, setMode] = useState(ModeSign.LOGIN)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleRedirectLogin = () => {
    setMode(ModeSign.LOGIN)
  }

  const handleRedirectRegister = () => {
    setMode(ModeSign.REGISTER)
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
            <>
              <Button color="inherit" onClick={handleClickOpen}>
                <div className={classes.logged}>
                  <AccountBoxIcon className={classes.menuButton} />
                  <span style={{ textTransform: 'none' }}>Đăng nhập / Đăng ký</span>
                </div>
              </Button>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
                disableBackdropClick
              >
                {mode === ModeSign.REGISTER && (
                  <>
                    <Register />
                    <Box textAlign="right" className={classes.menuButton}>
                      <Button
                        className={classes.redirect}
                        onClick={handleRedirectLogin}
                        color="primary"
                      >
                        Bạn đã có tài khoản? Đăng nhập ngay
                      </Button>
                    </Box>
                  </>
                )}
                {mode === ModeSign.LOGIN && (
                  <>
                    <Login />
                    <Box textAlign="right" className={classes.menuButton}>
                      <Button
                        className={classes.redirect}
                        onClick={handleRedirectRegister}
                        color="primary"
                      >
                        Bạn chưa có tài khoản? Đăng ký ngay
                      </Button>
                    </Box>
                  </>
                )}
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Đóng
                  </Button>
                </DialogActions>
              </Dialog>
            </>
          ) : (
            'da login'
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}
