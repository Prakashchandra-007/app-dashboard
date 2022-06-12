import React from 'react';
import Avtar from './Avtar'
function ProfileCard(props) {
    return (
        <div className="profile-card tiles">
            <Avtar size="50px" img="G:\learning\React\projects\dashboard\app-dashboard\src\images\mitchell-luo-ymo_yC_N_2o-unsplash.jpg"/>
            <div className="">
            <h1>{props.name}</h1>
            <p>Web development</p>
            </div>

        </div> 
    )
}
export default ProfileCard;