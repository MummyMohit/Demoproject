import React from 'react'
import { useSelector } from 'react-redux'
const Form = () => {
  const data = useSelector((state)=>(state.form))
  console.log(data,"data of form")
  return (
    <div>Form</div>
  )
}

export default Form