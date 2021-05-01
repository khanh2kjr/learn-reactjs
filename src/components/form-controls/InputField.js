import { TextField } from '@material-ui/core'
import { Controller } from 'react-hook-form'

export default function InputField(props) {
  const { form, name, label } = props
  const { control, formState } = form
  const { errors } = formState
  const hasError = errors[name]

  return (
    <Controller
      name={name}
      control={control}
      render={({ onChange, onBlur, value, name }) => {
        return (
          <TextField
            name={name}
            error={!!hasError}
            helperText={hasError?.message}
            label={label}
            variant="outlined"
            fullWidth
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
        )
      }}
    />
  )
}
