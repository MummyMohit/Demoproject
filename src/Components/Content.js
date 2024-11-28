import React, { useState, useEffect } from 'react';
import { Logopic, Lily, Lipi, Sily } from '../Pic/Pic';
import axios from 'axios'
import Modal from '../Share/Modal';
const Content = () => {

  const [data, setData] = useState([]);

  const Fetchdata = async () => {
    try {
      const reasponse = await axios.get(`https://fakestoreapi.com/products`)
      setData(reasponse.data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    Fetchdata();
  }, [])
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
        src={Lipi}
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
        <div className='row'>
          {data.map((item, index) => (
            <div className='col-md-3' key={item.id}>
              <div className="card mt-4 mb-4" style={{ width: '16rem' }}>
                <img src={item.image}
                  className='img-new'
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <h5 className="card-title">{item.price}</h5>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

    </>
  );
};

export default Content;
