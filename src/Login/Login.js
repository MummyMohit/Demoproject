import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { GirlPic } from '../Pic/Pic'; // Ensure you import your image
import * as Yup from 'yup';

const ValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Password is required'),
});

const Login = () => {
  const navigate = useNavigate();

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
    <div className="container py-5">
      <div className="row justify-content-center align-items-center login-mbl-gap">
        {/* Left Column: Image */}
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          <img
            src={GirlPic} // Replace with your image source
            alt="Illustration"
            className="img-fluid login-image"
            
          />
        </div>

        {/* Right Column: Login Form */}
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <h3 className="text-center mb-4">Log In</h3>
              <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                  <p className="text-start">
                    Email Address
                  </p>
                  <input
                    id="email"
                    className={`form-control ${
                      formik.touched.email && formik.errors.email ? 'is-invalid' : ''
                    }`}
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="invalid-feedback">{formik.errors.email}</div>
                  )}
                </div>

                <div className="mb-3">
                <p className="text-start">
                    Password
                  </p>
                  <input
                    id="password"
                    className={`form-control ${
                      formik.touched.password && formik.errors.password ? 'is-invalid' : ''
                    }`}
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.password && formik.errors.password && (
                    <div className="invalid-feedback">{formik.errors.password}</div>
                  )}
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Log In
                  </button>
                </div>
              </form>

              <div className="text-center mt-3">
                <Link to="/signin">Don't have an account? Create one</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
