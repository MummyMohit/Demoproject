import React, { useEffect, useState,useRef  } from 'react';
import { useLocation } from 'react-router-dom';
import { Dvideo } from '../Pic/Pic';
import axios from 'axios';

const Product = () => {
  const location = useLocation();
  const { id } = location.state || {};
  const [data, setData] = useState(null); // Initialize as null to handle loading state
  const videoRef = useRef(null);
  const Fetchdata = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Fetchdata();
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Reset to start
      videoRef.current.play();         // Start the video
    }
  }, []); // Empty dependency array to run only once on mount

  if (!data) {
    return <div>Loading...</div>; // Display loading message while data is being fetched
  }

  return (
    <div className="container mt-5">
      <h1 className="heading-t mt-5">This is Product Component</h1>
      <div className='row'>
        <div className='col-md-6 col-lg-6 col-sm-6'>
      <div key={data.id}>
        <img src={data.image} className="card-img-top img-fluid" alt={data.title} />
        <div className="card-body">
          <h5 className="card-title heading-t">{data.title}</h5>
          <p className="card-text heading-t">{data.description}</p>
          <p className="card-text heading-t"><strong>Price:</strong> ₹{data.price}</p>
        </div>
      </div>
      
      </div>
      <div className='col-md-6 col-lg-6 col-sm-6'>
    <video ref={videoRef}  width="100%" height="auto" controls>
    <source src={Dvideo} type="video/mp4"/>
    </video>
      
      </div>
      </div>
    </div>
  );
};

export default Product;
