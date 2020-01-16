import React from 'react';
import ManagerCard from '../../components/ManagerCard';
//import ManagerGraph from '../../components/ManagerGraph'
export default function ManagerDashBoard() {
    return (
        <section>
        <div className="py-3">
            <h5>Employee Reviews</h5>
            <ManagerCard />
        </div>
        </section>
    );
}