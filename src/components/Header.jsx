import React from 'react'
import { useCookies } from 'react-cookie'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { signOut } from '../authSlice'
import './header.scss'

export const Header = () => {
  const auth = useSelector((state) => state.auth.isSignIn)
  const dispatch = useDispatch()
  const history = useHistory()
  const [cookies, setCookie, removeCookie] = useCookies()
  void cookies
  void setCookie
  const handleSignOut = () => {
    dispatch(signOut())
    removeCookie('token')
    history.push('/signin')
  }

  return (
    <header className="header">
      <h1>Todoアプリ</h1>
      {auth ? (
        <button onClick={handleSignOut} className="sign-out-button">
          サインアウト
        </button>
      ) : (
        <></>
      )}
    </header>
  )
}
