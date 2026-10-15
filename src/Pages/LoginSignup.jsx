import { useState } from 'react'
import './CSS/LoginSignup.css'

const validate = ({ username, password, agree }, mode) => {
  const errors = {}
  if (username.trim().length < 3) errors.username = 'Username must be at least 3 characters.'
  if (password.length < 6) errors.password = 'Password must be at least 6 characters.'
  if (mode === 'register' && !agree) errors.agree = 'You must accept the terms to register.'
  return errors
}

export const LoginSignup = () => {
  const [mode, setMode] = useState('login')
  const [values, setValues] = useState({ username: '', password: '', agree: false })
  const [errors, setErrors] = useState({})
  const [done, setDone] = useState(false)

  const isLogin = mode === 'login'

  const update = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setValues((v) => ({ ...v, [field]: value }))
    setDone(false)
  }

  const switchMode = () => {
    setMode(isLogin ? 'register' : 'login')
    setErrors({})
    setDone(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const found = validate(values, mode)
    setErrors(found)
    // UI-only demo: there is no backend, so nothing is sent or stored.
    setDone(Object.keys(found).length === 0)
  }

  return (
    <div className='loginsignup'>
      <form className='form-box' onSubmit={handleSubmit} noValidate>
        <h2>{isLogin ? 'Login' : 'Register'}</h2>
        <div className='input-boxes'>
          <div>
            <label htmlFor='username'>Username </label>
            <input
              id='username'
              type='text'
              autoComplete='username'
              value={values.username}
              onChange={update('username')}
              aria-invalid={Boolean(errors.username)}
            />
            {errors.username && <p className='field-error' role='alert'>{errors.username}</p>}
          </div>

          <div>
            <label htmlFor='password'>Password </label>
            <input
              id='password'
              type='password'
              autoComplete={isLogin ? 'current-password' : 'new-password'}
              value={values.password}
              onChange={update('password')}
              aria-invalid={Boolean(errors.password)}
            />
            {errors.password && <p className='field-error' role='alert'>{errors.password}</p>}
          </div>
        </div>

        <p className='register'>
          {isLogin ? "Don't have an account? " : 'Already have an account? '}
          <button type='button' className='link-button' onClick={switchMode}>
            {isLogin ? 'Register Here' : 'Login Here'}
          </button>
        </p>

        {!isLogin && (
          <div className='agree'>
            <input
              id='agree'
              type='checkbox'
              checked={values.agree}
              onChange={update('agree')}
            />
            <label htmlFor='agree'>
              Agree to our terms of use and policy <span>Terms Of Use</span>
            </label>
          </div>
        )}
        {errors.agree && <p className='field-error' role='alert'>{errors.agree}</p>}

        <button type='submit'>Submit</button>
        {done && (
          <p className='form-success' role='status'>
            Demo only: this project has no backend, so nothing was sent.
          </p>
        )}
      </form>
    </div>
  )
}
