import React from "react";
import './Workshop.css';
import img1 from '../../assets/Images/hero.jpg';
import { useHistory } from "react-router-dom";


function Workshop(){

    return(
        <div className="gallery">
            <div className="content">
                <img className= 'pro-img' src='' alt = "e"/>
                <h3>workshop 1</h3>
                <p>description</p>
                <h6>date-time</h6>
                <ul>
                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                </ul>
                <button price={20} name={'dddd'} className="buy-1" >reserve ticket</button>
            </div>

        </div>

    )

}
export default Workshop;