import { yupResolver } from '@hookform/resolvers/yup'
import {
  Container,
  CssBaseline,
  Grid,
  LinearProgress,
  makeStyles
} from '@material-ui/core'
import ButtonField from 'components/form-controls/ButtonField'
import InputField from 'components/form-controls/InputField'
import PasswordField from 'components/form-controls/PasswordField'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import AvatarForm from './components/Avatar'
import RedirectSignIn from './components/RedirectSignIn'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  linePro: {
    width: '100%'
  }
}))

export default function RegisterForm({ onSubmit }) {
  const classes = useStyles()

  const schema = yup.object().shape({
    firstName: yup
      .string()
      .required('Please enter your first name')
      .min(2, 'Please enter at least 2 characters'),
    lastName: yup
      .string()
      .required('Please enter your last name')
      .min(2, 'Please enter at least 2 characters'),
    email: yup
      .string()
      .required('Please enter your email')
      .email('Please enter a valid email address'),
    password: yup
      .string()
      .required('Please enter password')
      .min(6, 'Please enter at least 6 characters'),
    retypePassword: yup
      .string()
      .required('Please retype your password')
      .oneOf([yup.ref('password')], 'Password does not match')
  })

  const form = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      retypePassword: ''
    },
    resolver: yupResolver(schema)
  })

  const { formState } = form

  const { isSubmitting } = formState

  const handleRegisterSubmit = async (formValues) => {
    await onSubmit?.(formValues)
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <AvatarForm classNameAvatar={classes.avatar} />
        {isSubmitting && <LinearProgress className={classes.linePro} />}
        <form className={classes.form} onSubmit={form.handleSubmit(handleRegisterSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <InputField form={form} name="firstName" label="First name *" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField form={form} name="lastName" label="Last name *" />
            </Grid>
            <Grid item xs={12}>
              <InputField form={form} name="email" label="Email address *" />
            </Grid>
            <Grid item xs={12}>
              <PasswordField form={form} name="password" label="Password *" />
            </Grid>
            <Grid item xs={12}>
              <PasswordField
                form={form}
                name="retypePassword"
                label="Retype Password *"
              />
            </Grid>
          </Grid>
          <ButtonField
            classNameButton={classes.submit}
            text="Create an account"
            disabled={isSubmitting}
          />
          <RedirectSignIn />
        </form>
      </div>
    </Container>
  )
}
