import React, {ChangeEvent, useRef, useState} from 'react'

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

  return <input type='checkbox' checked={parentValue} onChange={ setValue }/>
}

export const ControlledSelect = () => {
  const [parentValue, setParentValue] = useState('2')
  const setValue = (e: ChangeEvent<HTMLSelectElement>) => {
    setParentValue(e.currentTarget.value)
  }

  return <select value={parentValue} onChange={ setValue }>
    <option>none</option>
    <option value='1'>Mockow</option>
    <option value='2'>Minsk</option>
    <option value='3'>Kiev</option>
  </select>
}

export const ControlledFixedInput = () => <input value={'it-kaamasutra'}/>

