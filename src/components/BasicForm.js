import { useState, useEffect } from 'react'

const BasicForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [firstTouch, setFirstTouch] = useState(false)
  const [lastTouch, setLastTouch] = useState(false)
  const [emailTouch, setEmailTouch] = useState(false)
  let formIsValid = false

  const firstNameIsInvalid = firstName.trim() === '' && firstTouch
  const lastNameIsInvalid = lastName.trim() === '' && lastTouch
  const emailIsInvalid = !email.includes('@') && emailTouch

  if (!firstNameIsInvalid && !lastNameIsInvalid && !emailIsInvalid)
    formIsValid = true

  const firstNameHandler = event => {
    setFirstName(event.target.value)
  }
  const lastNameHandler = event => {
    setLastName(event.target.value)
  }
  const emailChangeHandler = event => {
    setEmail(event.target.value)
  }

  const firstNameBlurHanlder = () => {
    setFirstTouch(true)
  }
  const lastNameBlurHanlder = () => {
    setLastTouch(true)
  }
  const emailBlurHanlder = () => {
    setEmailTouch(true)
  }

  const formSubmitHandler = event => {
    event.preventDefault()

    // if (!firstNameIsValid || !lastNameIsValid || !emailIsValid) {
    //   return
    // }

    console.log([firstName, lastName, email])
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div
          className={
            firstNameIsInvalid ? 'form-control invalid' : 'form-control'
          }
        >
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            value={firstName}
            onChange={firstNameHandler}
            onBlur={firstNameBlurHanlder}
          />
        </div>
        <div
          className={
            lastNameIsInvalid ? 'form-control invalid' : 'form-control'
          }
        >
          <label htmlFor='last-name'>Last Name</label>
          <input
            type='text'
            id='last-name'
            value={lastName}
            onChange={lastNameHandler}
            onBlur={lastNameBlurHanlder}
          />
        </div>
      </div>
      <div className={emailIsInvalid ? 'form-control invalid' : 'form-control'}>
        <label htmlFor='email'>E-Mail Address</label>
        <input
          type='email'
          id='email'
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHanlder}
        />
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  )
}

export default BasicForm
