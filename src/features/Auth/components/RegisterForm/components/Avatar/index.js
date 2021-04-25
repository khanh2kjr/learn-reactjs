import { Avatar, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import React from 'react'

export default function AvatarForm({ classNameAvatar }) {
  return (
    <>
      <Avatar className={classNameAvatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Đăng ký tài khoản mới
      </Typography>
    </>
  )
}
