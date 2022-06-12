import React from 'react';

import Header from './Header';
import ProfileCard from './ProfileCard';

function Dashboard(){
    return(
    <div className="dashboard">
        <Header class='tiles' />
        {/* <header className="tiles"></header> */}
        <ProfileCard  name='Prakash Ch Muduli' />
        {/* <div className="profile-card tiles">
            <Avtar size="50px" img="G:\learning\React\projects\dashboard\app-dashboard\src\images\mitchell-luo-ymo_yC_N_2o-unsplash.jpg"/>
            <div className="">
            <h1>Prakash Ch Muduli</h1>
            <p>Web development</p>
            </div>

        </div> */}
        <div className="weather tiles">
            <h1>Application Dashboard</h1>
        </div>
        <div className="weather tiles"></div>
        <div className="facebook tiles"><iframe style={{height:"100%", width:"100%",borderRadius:'30px'}}
                src="https://prakashchandra-007.github.io/Analog-Clock/" title="W3Schools Free Online Web Tutorials">
            </iframe></div>
        <div className="currency tiles"></div>
        <div className="trending tiles"></div>
        <footer className="tiles">footer</footer>


    </div>

    )
}
export default Dashboard;