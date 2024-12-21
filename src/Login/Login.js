import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { GirlPic } from '../Pic/Pic';
import * as Yup from 'yup';

const ValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Password is required'),
});

const Login = () => {
  const navigate = useNavigate();

  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: ValidationSchema,
    onSubmit: (values) => {
      const storedData = JSON.parse(localStorage.getItem('FormData')) || [];
      const userExists = storedData.find(
        (user) => user.email === values.email && user.password === values.password
      );

      if (userExists) {
        console.log('Login successful');
        navigate('/home'); // Redirect to dashboard after successful login
      } else {
        console.log('Invalid email or password');
        alert('Invalid email or password');
      }
    },
  });

  return (
    <>
      <div className="container mt-5">
      
        <form onSubmit={formik.handleSubmit}>
        
          <div className="col-12 col-md-6 col-lg-6 col-sm-6 mb-3 mt-5">
            <input
              className="form-control form-control-lg"
              type="email"
              placeholder="Enter Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-danger">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="col-12 col-md-6 col-lg-6 col-sm-6">
            <input
              className="form-control form-control-lg"
              type="password"
              placeholder="Enter Password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-danger">{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="col-12 col-md-6 col-lg-6 col-sm-6 mt-4">
            <button type="submit" className="btn btn-primary w-100">
              Log In
            </button>
          </div>
          <div className="col-12 col-md-6 col-lg-6 col-sm-6 mt-4">
            <Link to="/signin">Create Account</Link>
          </div>
        
        </form>
      </div>
    </>
  );
};

export default Login;
