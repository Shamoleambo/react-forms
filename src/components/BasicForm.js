import { useState } from 'react'

const BasicForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const firstNameHandler = event => {
    setFirstName(event.target.value)
  }
  const lastNameHandler = event => {
    setLastName(event.target.value)
  }
  const emailChangeHandler = event => {
    setEmail(event.target.value)
  }

  const formSubmitHandler = event => {
    event.preventDefault()

    console.log([firstName, lastName, email])
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onChange={firstNameHandler} />
        </div>
        <div className='form-control'>
          <label htmlFor='last-name'>Last Name</label>
          <input type='text' id='last-name' onChange={lastNameHandler} />
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='email'>E-Mail Address</label>
        <input type='email' id='email' onChange={emailChangeHandler} />
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  )
}

export default BasicForm
