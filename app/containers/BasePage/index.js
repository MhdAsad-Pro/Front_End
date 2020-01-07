import React from 'react';
import Header from '../../components/Header';
import './basepage.css';
import { Link } from 'react-router-dom';
export default function BasePage(props) {
  return (
    <section>
      <Header />
      <div className="row m-0 row-100 ">
        <div className="col-2 my-nav">
          <h1 className="text-white">Hira</h1>
          {/** HR LinkS START*/}
        <Link className='btn btn-block  btn-light' to="/hr-dashboard">
         Hr Home
        </Link>
        {/* Manger Link */}

        <Link className='btn btn-block  btn-light' to="/manager">
          Manager Dashboard
        </Link>

        {/* LineManager Link */}

        <Link className='btn btn-block  btn-light' to="/line-manager">
           Line Manager Dashboard
        </Link>
        {/* generate Message Link */}

        <Link className='btn btn-block  btn-light' to="/message">
          Message
        </Link>
         {/* widget Link */}

         <Link className='btn btn-block  btn-light' to="/widget">
          Widget
        </Link>

        </div>
        <div className="col-10 bg-light">
            {props.children}
        </div>
      </div>
    </section>
  );
}
