import Header from 'components/Header'
import HomePage from 'pages/HomePage'
import SignUp from 'pages/SignUp'
import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import './App.scss'
import SignIn from './pages/SignIn'

export default function App() {
  const loggedInUser = useSelector((state) => state.user.current)
  const isLoggedIn = JSON.stringify(loggedInUser) !== '{}'

  return (
    <React.Fragment>
      <Header isLoggedIn={isLoggedIn} />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/sign-up" component={!isLoggedIn && SignUp} />
        <Route path="/sign-in" component={!isLoggedIn && SignIn} />
      </Switch>
      {isLoggedIn && (
        <>
          <Redirect from="/sign-up" to="/" />
          <Redirect from="/sign-in" to="/" />
        </>
      )}
    </React.Fragment>
  )
}
