import React from 'react';
import './Signup.css'
import image1 from '../../assets/Images/loginImage.png';
import { DropdownButton,Dropdown} from 'react-bootstrap';


function Signup() {

    function add(){
        const container = document.getElementById('container');
        container.classList.add("right-panel-active");
    }

    function remove(){
        const container = document.getElementById('container');
        container.classList.remove("right-panel-active");
    }

    return (

            <div class="loginbox">
                <img src={image1} class="avatar"/>
                    <h1>Login Here</h1>
                    <form>
                        <p>Username</p>
                        <input type="text" name="" placeholder= "Enter Username"/>
                        <p>Password</p>
                        <input type="password" name="" placeholder="Enter Password"/>
                        <input type="submit" name="" value="Login"/>
                        <a href="#">Lost your password?</a>
                        <a href="#">Don't have an account?</a>

                    </form>

            </div>


    );

}

export default Signup;
