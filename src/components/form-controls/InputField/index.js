import { TextField } from '@material-ui/core'
import { Controller } from 'react-hook-form'

export default function InputField(props) {
  const { form, name, label } = props
  const { errors, control } = form
  const hasError = errors[name]

  return (
    <Controller
      name={name}
      control={control}
      as={TextField}
      error={!!hasError}
      helperText={errors[name]?.message}
      label={label}
      variant="outlined"
      fullWidth
    />
  )
}
