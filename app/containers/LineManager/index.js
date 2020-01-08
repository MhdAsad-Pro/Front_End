import React from 'react';
import Graph from '../../components/Emp-ProgressGrpah';
import LineCard from '../../components/LineCard'
export default function LineManager (){
    return(
        <section className=''>
        <div className='row'>
          <div className='col-md-12'>
          <Graph/>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
          <LineCard/>
          </div>
        </div>  
      </section>
    )
}