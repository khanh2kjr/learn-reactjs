import Grid from '@material-ui/core/Grid'
import React from 'react'
import { Link } from 'react-router-dom'

export default function RedirectSignUp() {
  return (
    <Grid container justify="flex-end">
      <Grid item>
        <Link to="/sign-up">Do not have an account? Sign up</Link>
      </Grid>
    </Grid>
  )
}
