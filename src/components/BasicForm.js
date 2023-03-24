import useInputBasic from '../hooks/use-inputBasic'

const nameValidator = name => name.trim() === ''
const emailValidator = email => !email.includes('@')

const BasicForm = () => {
  const {
    value: firstName,
    valueIsInvalid: firstNameInputInvalid,
    className: classFirstNameField,
    valueHandler: firstNameHandler,
    blurHandler: firstNameBlurHanlder,
    reset: firstNameRest
  } = useInputBasic(nameValidator)

  const {
    value: lastName,
    valueIsInvalid: lastNameInputInvalid,
    className: classLastNameField,
    valueHandler: lastNameHandler,
    blurHandler: lastNameBlurHanlder,
    reset: lastNameReset
  } = useInputBasic(nameValidator)

  const {
    value: email,
    valueIsInvalid: emailInputInvalid,
    className: classEmailField,
    valueHandler: emailChangeHandler,
    blurHandler: emailBlurHanlder,
    reset: emailReset
  } = useInputBasic(emailValidator)

  let formIsValid = false

  if (!firstNameInputInvalid && !lastNameInputInvalid && !emailInputInvalid)
    formIsValid = true

  const formSubmitHandler = event => {
    event.preventDefault()

    console.log([firstName, lastName, email])
    firstNameRest()
    lastNameReset()
    emailReset()
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={classFirstNameField}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            value={firstName}
            onChange={firstNameHandler}
            onBlur={firstNameBlurHanlder}
          />
        </div>
        <div className={classLastNameField}>
          <label htmlFor='last-name'>Last Name</label>
          <input
            type='text'
            id='last-name'
            value={lastName}
            onChange={lastNameHandler}
            onBlur={lastNameBlurHanlder}
          />
        </div>
      </div>
      <div className={classEmailField}>
        <label htmlFor='email'>E-Mail Address</label>
        <input
          type='email'
          id='email'
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHanlder}
        />
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  )
}

export default BasicForm
