import React from 'react'
import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

const ValidationSchema = Yup.object().shape({
    firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('First Name is Required'),
    lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Last Name is Required'),
    email: Yup.string().email('Invalid email address').required('email is required'),
    
    password: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Password is required'),
})
const SignIn = () => {
    
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        },
        validationSchema: ValidationSchema ,
        onSubmit: (values) => {
            const data = [{
                firstName:values.firstName,
                lastName:values.lastName,
                email:values.email,
                password:values.password
            }]
            handlesubmitform(data)
            formik.resetForm()
        },
        
    });

    const handlesubmitform = (data)=>{
       const updateData =JSON.parse(localStorage.getItem("FormData"))  || []
       const FData = [...updateData,...data]
       localStorage.setItem("FormData",JSON.stringify(FData))
    }

    return (
        <>
            <div className='container mt-5'>
                <form onSubmit={formik.handleSubmit}>
                    <div className='col-12 col-md-6 col-lg-6 col-sm-6 mb-3 mt-2'>
                        <label for="exampleInputEmail1">First Name</label>
                        <input type="text" className="form-control cstm-form"
                            id="exampleInputEmail1" aria-describedby="emailHelp"
                            name='firstName'
                            placeholder="Enter First Name"
                            onChange={formik.handleChange}
                            value={formik.values.firstName}
                        />
                        {formik.touched.firstName && formik.errors.firstName ? (
                            <div className='text-danger'>{formik.errors.firstName}</div>
                        ) : null}

                    </div>
                    <div className='col-12 col-md-6 col-lg-6 col-sm-6 mb-3 mt-2'>
                        <label for="exampleInputEmail1">Last Name</label>
                        <input type="text" className="form-control"
                            id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Last Name"
                            name='lastName'
                            onChange={formik.handleChange}
                            value={formik.values.lastName}

                        />
                        {formik.touched.lastName && formik.errors.lastName ? (
                            <div className='text-danger'>{formik.errors.lastName}</div>
                        ) : null}
                    </div>
                    <div className='col-12 col-md-6 col-lg-6 col-sm-6 mb-3 mt-2'>
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1"
                            aria-describedby="emailHelp" placeholder="Enter email"
                            onChange={formik.handleChange}
                            name='email'
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className='text-danger'>{formik.errors.email}</div>
                        ) : null}
                    </div>
                    <div className='col-12 col-md-6 col-lg-6 col-sm-6 mb-3 mt-2'>
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"
                            placeholder="Password"
                            name='password'
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className='text-danger'>{formik.errors.password}</div>
                        ) : null}
                    </div>
                    <div className='col-12 col-md-6 col-lg-6 col-sm-6 mb-3 mt-2'>
                        <button type="submit" class="btn btn-primary w-100">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SignIn