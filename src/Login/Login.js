import React from 'react'

const Login = () => {
  return (
    <>
    <div className='container mt-5'>
       
        <div className='col-12 col-md-6 col-lg-6 col-sm-6 mb-3 mt-5'>
    <input class="form-control form-control-lg" type="email" placeholder="Enter Email" aria-label=".form-control-lg example"/>
    </div>
    <div className='col-12 col-md-6 col-lg-6 col-sm-6'>
    <input class="form-control form-control-lg" type="password" placeholder="Enter Password" aria-label=".form-control-lg example"/>
    </div>
    <div className='col-12 col-md-6 col-lg-6 col-sm-6 mt-4'>
   <button  type="submit" className='btn btn-primary w-100'>Log In</button>
    </div>
    
</div>
    </>
  )
}

export default Login