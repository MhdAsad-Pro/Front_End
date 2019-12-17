import React from 'react';
import Header from '../../components/Header';
import './basepage.css';
export default function BasePage(props) {
  return (
    <section>
      <Header />
      <div className="row m-0 row-100 ">
        <div className="col-2 bg-dark ">
          <h1 className="text-white">Hira</h1>
        </div>
        <div className="col-10 bg-light">
            {props.children}
        </div>
      </div>
    </section>
  );
}
