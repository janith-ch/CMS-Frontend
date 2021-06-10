import React from "react";
import './workshopModel.css'
import img1 from '../../assets/Images/event.png'
import { useHistory } from "react-router-dom";
function workshopModel(){

    const history = useHistory();

    const routeChange = () => {
        let path = '/PageDescription';
        history.push(path);
    }
    return(
        <div className="gallery">
            <div className="content">
                <img className= 'pro-img' src={img1} alt = "e"/>
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
                <button price={20} name={'dddd'} className="buy-1" onClick={routeChange}>reserve ticket</button>
            </div>

        </div>

    )

}
export default workshopModel();