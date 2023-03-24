import { useState } from 'react'

const SimpleInput = props => {
  const [nameInput, setNameInput] = useState('')
  const [nameFieldTouched, setNameFieldTouched] = useState(false)

  const enteredNameIsValid = nameInput.trim() !== ''

  const nameInputHandler = event => {
    setNameInput(event.target.value)
  }

  const nameInputBlurHandler = () => {
    setNameFieldTouched(true)
  }

  const formSubmitHandler = event => {
    event.preventDefault()
    setNameFieldTouched(true)

    if (nameInput.trim() === '') {
      return
    }

    console.log(nameInput)
    setNameFieldTouched(false)
    setNameInput('')
  }

  const invalidNameField = !enteredNameIsValid && nameFieldTouched
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
