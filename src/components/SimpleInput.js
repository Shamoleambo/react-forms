import { useState, useEffect, useRef } from 'react'

const SimpleInput = props => {
  const [nameInput, setNameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [nameFieldTouched, setNameFieldTouched] = useState(false)
  const [emailFieldTouched, setEmailFieldTouched] = useState(false)
  const nameInputField = useRef()
  const emailInputField = useRef()

  const enteredNameIsValid = nameInput.trim() !== ''
  const enterdEmailIsValid = emailInput.includes('@')
  const invalidNameField = !enteredNameIsValid && nameFieldTouched
  const invalidEmailField = !enterdEmailIsValid && emailFieldTouched
  const formControlClasses =
    invalidNameField || invalidEmailField
      ? 'form-control invalid'
      : 'form-control'
  let formIsValid = false

  useEffect(() => {
    if (invalidNameField) nameInputField.current.className = 'invalidName'
    if (invalidEmailField) emailInputField.current.className = 'invalidEmail'
  }, [formControlClasses, invalidNameField, invalidEmailField])

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
      <div className={formControlClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          ref={nameInputField}
          type='text'
          id='name'
          value={nameInput}
          onChange={nameInputHandler}
          onBlur={nameInputBlurHandler}
        />
        <label htmlFor='email'>Your E-mail</label>
        <input
          ref={emailInputField}
          type='email'
          id='email'
          value={emailInput}
          onChange={emailInputHandler}
          onBlur={emailInputBlurHandler}
        />
        {invalidNameField && <p className='error-text'>Enter a valid name</p>}
        {invalidEmailField && <p className='error-text'>Enter a valid email</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
