import React from 'react'
import { forwardRef } from 'react'

const Input = forwardRef((props,ref) => {
  return (
    <input type={props.type} placeholder={props.placeHolder} ref={ref}/>
  )
})

export default Input