import { useState } from 'react'

const SimpleInput = props => {
  const [nameInput, setNameInput] = useState('')

  const nameInputHandler = event => {
    setNameInput(event.target.value)
  }

  const formSubmitHandler = event => {
    event.preventDefault()

    console.log(nameInput)
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          value={nameInput}
          onChange={nameInputHandler}
        />
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
