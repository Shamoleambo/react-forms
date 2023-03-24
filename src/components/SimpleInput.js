import { useState } from 'react'

const SimpleInput = props => {
  const [nameInput, setNameInput] = useState('')
  const [nameInputIsValid, setNameInputIsValid] = useState(false)
  const [nameInputTouched, setNameInputTouched] = useState(false)

  const nameInputHandler = event => {
    setNameInput(event.target.value)
    if (event.target.value.trim() !== '') setNameInputIsValid(true)
  }

  const formSubmitHandler = event => {
    event.preventDefault()
    setNameInputTouched(true)

    if (nameInput.trim() === '') {
      setNameInputIsValid(false)
      return
    }
    setNameInputIsValid(true)

    console.log(nameInput)
  }

  const nameInputBlurHandler = event => {
    setNameInputTouched(true)

    if (nameInput.trim() === '') {
      setNameInputIsValid(false)
      return
    } else {
      setNameInputIsValid(true)
    }
  }

  const invalidNameField = !nameInputIsValid && nameInputTouched
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
