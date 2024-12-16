import React from 'react'
import { useSelector } from 'react-redux'
const Form = () => {
  const data = useSelector((state) => (state.form.form))
  console.log(data, "data of form")
  return (
    <>
      <div className='container mt-4'>
      <div className='row mt-4'>
  {data.map((item, index) => (
    <div className='row' key={index}>
      <div className='col-12 col-md-6 col-sm-6 col-lg-6 mt-4'>
        <h1 className='heading-t'>{item.title}</h1>
        <h1 className='heading-t'> {item.price}</h1>
        <h1 className='heading-t'>{item.description}</h1>
        <h1 className='heading-t'>{item.category}</h1>
      </div>
      <div className='col-12 col-md-6 col-sm-6 col-lg-6 mt-4'>
        <img src={item.file}/>
      </div>
    </div>
  ))}
</div>


      </div>
    </>
  )
}

export default Form