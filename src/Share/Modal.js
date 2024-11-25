import React, { useState } from 'react';
import useModal from '../ContextApi/Usemodal';
import { useFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

const Modal = () => {
  const { isModalOpen, toggleModal } = useModal();
  const [file, setFile] = useState(null);

  const SignupSchema = Yup.object().shape({
    title: Yup.string()
      .required(' Title is Required'),
      price: Yup.string()
      .required(' Price is Required'),
      description: Yup.string()
      .required(' Description is Required'),
      category: Yup.string()
      .required(' Category  is Required'),
     file: Yup.string()
      .required(' Image  is Required'),
  });

  
  const formik = useFormik({
    initialValues: {
      title: '',
      price: '',
      description: '',
      category: '',
      file: null,
    },
    validationSchema:SignupSchema,
    onSubmit: (values) => {
      const data = new FormData();
      data.append('title', values.title);
      data.append('price', values.price);
      data.append('description', values.description);
      data.append('category', values.category);
      data.append('file', values.file);

      handleSubmit(data);
    },
  });

  const handleSubmit = async (data) => {
    try {
      const response = await axios.post('https://fakestoreapi.com/products', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response, 'Data successfully sent');
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    formik.setFieldValue('file', selectedFile); // Update Formik value
  };

  const categoryOptions = ['Electronics', 'Clothing', 'Jewelry', 'Accessories'];

  if (!isModalOpen) {
    return null;
  }

  return (
    <div className="modal show" style={{ display: 'block', height: '500px' }} tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">User Form</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={toggleModal} // Close modal on button click
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="container">
              <form onSubmit={formik.handleSubmit}>
                <div className="form-group mt-3 mb-3">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Enter Title"
                    name="title"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                  />
                  {formik.errors.title && formik.touched.title ? (
             <div className='text-danger'>{formik.errors.title}</div>
           ) : null}
                </div>

                <div className="form-group mt-3 mb-3">
                  <label htmlFor="price">Price</label>
                  <input
                    type="text"
                    className="form-control"
                    id="price"
                    placeholder="Enter Price"
                    name="price"
                    onChange={formik.handleChange}
                    value={formik.values.price}
                  />
                    {formik.errors.price && formik.touched.price ? (
             <div className='text-danger'>{formik.errors.price}</div>
           ) : null}
                </div>

                <div className="form-group mt-3 mb-3">
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    placeholder="Enter Description"
                    name="description"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                  />
                    {formik.errors.description && formik.touched.description ? (
             <div className='text-danger'>{formik.errors.description}</div>
           ) : null}
                </div>

                <div className="form-group mt-3 mb-3">
                  <label htmlFor="category">Category</label>
                  <select
                    className="form-control"
                    id="category"
                    name="category"
                    onChange={formik.handleChange}
                    value={formik.values.category}
                  >
                    <option value="">Select Category</option>
                    {categoryOptions.map((category, index) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  {formik.errors.category && formik.touched.category ? (
             <div className='text-danger'>{formik.errors.category}</div>
           ) : null}
                </div>

                <div className="form-group mt-3 mb-3">
                  <label htmlFor="file">Upload Image</label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="file"
                    onChange={handleFileChange}
                  />
                       {formik.errors.file && formik.touched.file ? (
             <div className='text-danger'>{formik.errors.file}</div>
           ) : null}
                </div>

                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
