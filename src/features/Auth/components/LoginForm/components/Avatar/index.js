import { Avatar, Typography } from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import React from 'react'

export default function AvatarForm({ classNameAvatar }) {
  return (
    <>
      <Avatar className={classNameAvatar}>
        <ExitToAppIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
    </>
  )
}
