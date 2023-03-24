import { useState } from 'react'

const SimpleInput = props => {
  const [nameInput, setNameInput] = useState('')
  const [nameInputIsValid, setNameInputIsValid] = useState(true)

  const nameInputHandler = event => {
    setNameInput(event.target.value)
  }

  const formSubmitHandler = event => {
    event.preventDefault()

    if (nameInput.trim() === '') {
      setNameInputIsValid(false)
      return
    }
    setNameInputIsValid(true)

    console.log(nameInput)
  }

  const formControlClasses = nameInputIsValid
    ? 'form-control'
    : 'form-control invalid'

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={formControlClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          value={nameInput}
          onChange={nameInputHandler}
        />
        {!nameInputIsValid && <p className='error-text'>Enter a valid name</p>}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
