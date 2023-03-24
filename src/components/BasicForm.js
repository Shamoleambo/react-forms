import { useState, useEffect } from 'react'

const BasicForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [firstNameIsValid, setFirstNameIsValid] = useState(false)
  const [lastNameIsValid, setLastNameIsValid] = useState(false)
  const [emailIsValid, setEmailIsValid] = useState(false)
  const [formIsValid, setFormIsValid] = useState(false)

  useEffect(() => {
    if (firstNameIsValid && lastNameIsValid && emailIsValid)
      setFormIsValid(true)
  }, [firstNameIsValid, lastNameIsValid, emailIsValid])

  const firstNameHandler = event => {
    setFirstName(event.target.value)

    if (event.target.value.trim() === '') setFirstNameIsValid(false)
    else setFirstNameIsValid(true)
  }
  const lastNameHandler = event => {
    setLastName(event.target.value)

    if (event.target.value.trim() === '') setLastNameIsValid(false)
    else setLastNameIsValid(true)
  }
  const emailChangeHandler = event => {
    setEmail(event.target.value)

    if (!event.target.value.includes('@')) setEmailIsValid(false)
    else setEmailIsValid(true)
  }

  const formSubmitHandler = event => {
    event.preventDefault()

    if (!firstNameIsValid || !lastNameIsValid || !emailIsValid) {
      return
    }

    console.log([firstName, lastName, email])
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={formIsValid ? 'form-control' : 'form-control invalid'}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            value={firstName}
            onChange={firstNameHandler}
          />
        </div>
        <div className={formIsValid ? 'form-control' : 'form-control invalid'}>
          <label htmlFor='last-name'>Last Name</label>
          <input
            type='text'
            id='last-name'
            value={lastName}
            onChange={lastNameHandler}
          />
        </div>
      </div>
      <div className={formIsValid ? 'form-control' : 'form-control invalid'}>
        <label htmlFor='email'>E-Mail Address</label>
        <input
          type='email'
          id='email'
          value={email}
          onChange={emailChangeHandler}
        />
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  )
}

export default BasicForm
