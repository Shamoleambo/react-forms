import { useState } from 'react'

const SimpleInput = props => {
  const [nameInput, setNameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [nameFieldTouched, setNameFieldTouched] = useState(false)
  const [emailFieldTouched, setEmailFieldTouched] = useState(false)

  const enteredNameIsValid = nameInput.trim() !== ''
  const enterdEmailIsValid = emailInput.includes('@')

  const invalidNameField = !enteredNameIsValid && nameFieldTouched
  const invalidEmailField = !enterdEmailIsValid && emailFieldTouched
  let formIsValid = false

  const nameClass = invalidNameField ? 'form-control invalid' : 'form-control'
  const emailClass = invalidEmailField ? 'form-control invalid' : 'form-control'

  if (enteredNameIsValid && enterdEmailIsValid) {
    formIsValid = true
  }

  const nameInputHandler = event => {
    setNameInput(event.target.value)
  }

  const emailInputHandler = event => {
    setEmailInput(event.target.value)
  }

  const nameInputBlurHandler = () => {
    setNameFieldTouched(true)
  }

  const emailInputBlurHandler = () => {
    setEmailFieldTouched(true)
  }

  const formSubmitHandler = event => {
    event.preventDefault()
    setNameFieldTouched(true)
    setEmailFieldTouched(true)

    if (nameInput.trim() === '' || !emailInput.includes('@')) {
      return
    }

    console.log(nameInput, emailInput)
    setNameFieldTouched(false)
    setEmailFieldTouched(false)
    setNameInput('')
    setEmailInput('')
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameClass}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          value={nameInput}
          onChange={nameInputHandler}
          onBlur={nameInputBlurHandler}
        />
        {invalidNameField && <p className='error-text'>Enter a valid name</p>}
      </div>
      <div className={emailClass}>
        <label htmlFor='email'>Your E-mail</label>
        <input
          type='email'
          id='email'
          value={emailInput}
          onChange={emailInputHandler}
          onBlur={emailInputBlurHandler}
        />
      </div>
      {invalidEmailField && <p className='error-text'>Enter a valid email</p>}
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
