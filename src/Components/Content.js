import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logopic, Lipi, Sily, Basic, Room } from '../Pic/Pic';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../ApI/ProductApi'
import axios from 'axios'
import Modal from '../Share/Modal';
const Content = () => {

  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const navigate = useNavigate();


  const sendData = (item) => {
    navigate('/product', { state: { id: item } }); // Correctly specify the property name and value
  };
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide w-100 mt-2" data-bs-ride="carousel">
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        {/* Carousel Inner */}
        <div className="carousel-inner">
          {/* First Slide */}
          <div className="carousel-item active">
            <img
              src={Lipi}
              className="d-block w-100"
              style={{ height: '500px', objectFit: 'cover' }}
              alt="Slide 1"
            />
          </div>

          {/* Second Slide */}
          <div className="carousel-item">
            <img
              src={Basic}
              className="d-block w-100"
              style={{ height: '500px', objectFit: 'cover' }}
              alt="Slide 2"
            />
          </div>

          {/* Third Slide */}
          <div className="carousel-item">
            <img
              src={Sily}
              className="d-block w-100"
              style={{ height: '500px', objectFit: 'cover' }}
              alt="Slide 3"
            />
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <Modal />
      <div className='container'>
        <h1 className='heading-t ml-4' style={{ marginLeft: '36%' }}>Our Clothing Products</h1>
      </div>
      <div className="container my-4">
        <div className="row">
          {products?.map((item) => (
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 card-mbl" key={item?.id} onClick={() => sendData(item.id)}>
              <div className="custom-card ">
                <img
                  src={item?.image}
                  alt={item?.title}
                  className="custom-img img-fluid"
                />
                <div className="card-body">
                  <h5 className="card-title">{item?.title}</h5>
                  <p className="card-price">₹{item?.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='container'>
        <h1 className='heading-t ml-4' style={{ marginLeft: '36%' }}>Products </h1>
        <div className='row'>
          <div className='col-md-6 col-sm-6  col-lg-6'>
            <h1 className='heading-t ml-4'>Products Name </h1>
            <p className='heading-t ml-4 ' data-aos="fade-right">Upgrade your wardrobe essentials with our Classic Cotton Crewneck T-Shirt, the perfect blend of comfort and style. Made from 100% premium breathable cotton, this t-shirt offers a soft touch and lightweight feel, keeping you cool and comfortable all day long.

              Designed with a timeless crewneck and a tailored fit, it's perfect for casual outings, layering under jackets, or pairing with jeans for a relaxed look. Available in a variety of colors to match your mood and style.</p>
          </div>
          <div className='col-md-6 col-sm-6 col-lg-6'>
            <img src={Room}
              className='img-cu img-fluid'
              alt="Room"
              data-aos="fade-left" // Add your desired animation type
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
