import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as Yup from 'yup';
import useModal from '../ContextApi/Usemodal';
import { addform } from '../reduxstoolkit/FormSlice';

const Modal = () => {
  const { isModalOpen, toggleModal } = useModal();
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const categoryOptions = ['Electronics', 'Clothing', 'Jewelry', 'Accessories'];

  // Validation schema using Yup
  const SignupSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    price: Yup.string().required('Price is required'),
    description: Yup.string().required('Description is required'),
    category: Yup.string().required('Category is required'),
    file: Yup.mixed().required('Image is required'),
  });

  const formik = useFormik({
    initialValues: {
      title: '',
      price: '',
      description: '',
      category: '',
      file: null,
    },
    validationSchema: SignupSchema,
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append('title', values.title);
      formData.append('price', values.price);
      formData.append('description', values.description);
      formData.append('category', values.category);
      formData.append('file', values.file);

      try {
        const response = await axios.post('https://fakestoreapi.com/products', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log('Data successfully sent:', response.data);

        // Dispatch form data to Redux store
        dispatch(addform(values));
        toggleModal(); // Close the modal
        navigate('/form'); // Navigate to another component
      } catch (error) {
        console.error('Error submitting data:', error);
      }
    },
  });

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    formik.setFieldValue('file', selectedFile);
  };

  if (!isModalOpen) return null;

  return (
    <div className="modal show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">User Form</h5>
            <button type="button" className="close" aria-label="Close" onClick={toggleModal}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  placeholder="Enter title"
                  onChange={formik.handleChange}
                  value={formik.values.title}
                />
                {formik.touched.title && formik.errors.title && (
                  <div className="text-danger">{formik.errors.title}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="price">Price</label>
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  name="price"
                  placeholder="Enter price"
                  onChange={formik.handleChange}
                  value={formik.values.price}
                />
                {formik.touched.price && formik.errors.price && (
                  <div className="text-danger">{formik.errors.price}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  placeholder="Enter description"
                  onChange={formik.handleChange}
                  value={formik.values.description}
                />
                {formik.touched.description && formik.errors.description && (
                  <div className="text-danger">{formik.errors.description}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="category">Category</label>
                <select
                  className="form-control"
                  id="category"
                  name="category"
                  onChange={formik.handleChange}
                  value={formik.values.category}
                >
                  <option value="">Select category</option>
                  {categoryOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {formik.touched.category && formik.errors.category && (
                  <div className="text-danger">{formik.errors.category}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="file">Upload Image</label>
                <input
                  type="file"
                  className="form-control-file"
                  id="file"
                  onChange={handleFileChange}
                />
                {formik.touched.file && formik.errors.file && (
                  <div className="text-danger">{formik.errors.file}</div>
                )}
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
  );
};

export default Modal;
