import { useState } from 'react'

const SimpleInput = props => {
  const [nameInput, setNameInput] = useState('')
  const [nameFieldIsValid, setNameFieldIsValid] = useState(false)
  const [nameFieldTouched, setNameFieldTouched] = useState(false)

  const nameInputHandler = event => {
    setNameInput(event.target.value)
    if (event.target.value.trim() !== '') setNameFieldIsValid(true)
  }

  const formSubmitHandler = event => {
    event.preventDefault()
    setNameFieldTouched(true)

    if (nameInput.trim() === '') {
      setNameFieldIsValid(false)
      return
    }
    setNameFieldIsValid(true)

    console.log(nameInput)
  }

  const nameInputBlurHandler = event => {
    setNameFieldTouched(true)

    if (nameInput.trim() === '') {
      setNameFieldIsValid(false)
      return
    } else {
      setNameFieldIsValid(true)
    }
  }

  const invalidNameField = !nameFieldIsValid && nameFieldTouched
  const formControlClasses = invalidNameField
    ? 'form-control invalid'
    : 'form-control'

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={formControlClasses}>
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
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
