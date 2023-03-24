import { useState } from 'react'

const useInputBasic = validator => {
  const [value, setValue] = useState('')
  const [touch, setTouch] = useState(false)

  const valueIsInvalid = validator(value)
  const fieldValueInvalid = valueIsInvalid && touch
  const className = fieldValueInvalid ? 'form-control invalid' : 'form-control'

  const valueHandler = event => {
    setValue(event.target.value)
  }
  const blurHandler = () => {
    setTouch(true)
  }
  const reset = () => {
    setValue('')
    setTouch(false)
  }

  return {
    value,
    valueIsInvalid,
    className,
    valueHandler,
    blurHandler,
    reset
  }
}

export default useInputBasic
