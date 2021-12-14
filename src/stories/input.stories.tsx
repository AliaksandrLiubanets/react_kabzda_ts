import React, {ChangeEvent, useRef, useState} from 'react'
import {action} from '@storybook/addon-actions'

export default {
  title: 'input',
}

export const UncontrolledInput = () => {
  return <input/>
}

export const UncontrolledInputWithLocalState = () => {
  const [value, setValue] = useState<string>('')
  const setCurrentValue = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)
  return <div><input value={value} onChange={setCurrentValue}/> - {value}</div>
}

export const UncontrolledInputWithRef = () => {
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement | null>(null)

  const save = () => {
    const el = inputRef.current
    el && setValue(el.value)
  }

  return <div><input ref={inputRef}/> <button onClick={ save }>save value</button> - actual value: {value}</div>
}

export const ControlledInput = () => {
  const [parentValue, setParentValue] = useState('')
  const setValue = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.value)

  return <input value={parentValue} onChange={ setValue }/>
}

export const ControlledCheckbox = () => {
  const [parentValue, setParentValue] = useState(true)
  const setValue = (e: ChangeEvent<HTMLInputElement>) =>  setParentValue(e.currentTarget.checked)

  return <input type='checkbox' checked={parentValue} onChange={ action('checkbox wants to change') }/>
}



export const ControlledFixedInput = () => <input value={'it-kaamasutra'}/>

