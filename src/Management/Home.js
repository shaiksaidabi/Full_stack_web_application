import React from 'react';
import mainbanner from "./assets/10161832.jpg";
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <section className='container p-5 ' >
      <div className='row'>
        <div className='col-lg-6 p-5'>
          <h1 className='display-5'>Learn. Grow. Succeed with Chandu Institutions</h1>
          <p>We’re with You at Every Step of Your Educational Journey</p>
          <NavLink to="/about">
            <button className='btn btn-primary me-3'>KnowMore</button>
          </NavLink>
          <NavLink to="/contact">
            <button className='btn btn-danger'>Demo</button>
          </NavLink>
        </div>
        <div className='col-lg-6 p-3 text-end'>
          <img src={mainbanner} className='w-75 mainBanner' />

        </div>
      </div>

    </section>
  )
}

export default Home