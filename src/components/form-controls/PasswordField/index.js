import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput
} from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import React, { useState } from 'react'
import { Controller } from 'react-hook-form'

export default function PasswordField(props) {
  const { form, name, label } = props
  const { errors, control } = form
  const hasError = errors[name]

  const [showPassword, setShowPassword] = useState()

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div>
      <FormControl error={!!hasError} fullWidth variant="outlined">
        <InputLabel>{label}</InputLabel>
        <Controller
          name={name}
          control={control}
          as={OutlinedInput}
          error={!!hasError}
          type={showPassword ? 'text' : 'password'}
          label={label}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          labelWidth={70}
        />
      </FormControl>
      <FormHelperText error={!!hasError}>{errors[name]?.message}</FormHelperText>
    </div>
  )
}