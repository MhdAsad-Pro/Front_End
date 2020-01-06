import React from 'react';
import KPIReview from '../../components/KPIReview';
import Graph from '../../components/Emp-ProgressGrpah';
//import HRgraph from '../../components/HRgraph'

export default function LineManager (){
    return(
        <section className='py-05'>
        <div className='row'>
          <div className='col-md-12'>
          <Graph/>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
          <KPIReview/>
          </div>
        </div>  
      </section>
    )
}