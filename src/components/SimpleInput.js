import useInput from '../hooks/use-input'

const nameValidator = nameInput => nameInput.trim() !== ''
const emailValidator = emailInput => emailInput.includes('@')

const SimpleInput = () => {
  const {
    value: nameInput,
    hasError: nameHasError,
    isValid: nameIsValid,
    reset: nameReset,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHanlder
  } = useInput(nameValidator)
  const {
    value: emailInput,
    hasError: emailHasError,
    isValid: emailIsValid,
    reset: emailReset,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHanlder
  } = useInput(emailValidator)

  let formIsValid = false

  const nameClass = nameHasError ? 'form-control invalid' : 'form-control'
  const emailClass = emailHasError ? 'form-control invalid' : 'form-control'

  if (nameIsValid && emailIsValid) {
    formIsValid = true
  }

  const formSubmitHandler = event => {
    event.preventDefault()
    if (nameHasError || emailHasError) {
      return
    }

    nameReset()
    emailReset()
    console.log(nameInput, emailInput)
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameClass}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          value={nameInput}
          onChange={nameChangeHandler}
          onBlur={nameBlurHanlder}
        />
        {nameHasError && <p className='error-text'>Enter a valid name</p>}
      </div>
      <div className={emailClass}>
        <label htmlFor='email'>Your E-mail</label>
        <input
          type='email'
          id='email'
          value={emailInput}
          onChange={emailChangeHandler}
          onBlur={emailBlurHanlder}
        />
      </div>
      {emailHasError && <p className='error-text'>Enter a valid email</p>}
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
