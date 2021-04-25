import Grid from '@material-ui/core/Grid'
import React from 'react'
import { Link } from 'react-router-dom'

export default function RedirectSignIn() {
  return (
    <Grid container justify="flex-end">
      <Grid item>
        <Link to="/sign-in">Already have an account? Sign in</Link>
      </Grid>
    </Grid>
  )
}
