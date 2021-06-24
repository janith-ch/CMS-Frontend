import React, {useState} from 'react';
import './Signup.css'
import { DropdownButton,Dropdown} from 'react-bootstrap';


function Signup() {


    const [inputField , setInputField] = useState({
        first_name: '',
        email: '',
        type: '1',
        password: ''
    })

    const inputsHandler = (e) =>{
        setInputField( {[e.target.name]: e.target.value} )
    }

    function add(){
        const container = document.getElementById('container');
        container.classList.add("right-panel-active");
    }

    function remove(){
        const container = document.getElementById('container');
        container.classList.remove("right-panel-active");
    }

    return (
        <div className='hero-containers'>
            <div className="container" id="container">
                <div className="form-container sign-up-container">
                    <form className='dev-form' action="#">
                        <h1>Create Account</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"/></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"/></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"/></a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name"/>
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                        <br/>
                        {/*<div className="row">*/}
                        {/*    <div className="col"><select className="form-control">*/}
                        {/*        <option>India</option>*/}
                        {/*        <option>China</option>*/}
                        {/*        <option>UK</option>*/}
                        {/*    </select></div>*/}
                        {/*</div>*/}


                        <div className="select">
                            <select name="type" id="slct" onChange={inputsHandler}>
                                <option selected disabled className= 'op' value=''>I want to Register As</option>
                                <option value="1">Attendee</option>
                                <option value="2">Researcher</option>
                                <option value="3">Workshop Conductor</option>
                                {/*<option value="3">Reviwer</option>*/}
                            </select>
                        </div>

                        <div className="form-group mt-3" hidden={inputField.type === "1" || inputField.type === "3" }>
                            <label className="mr-2">Upload the Research Paper file:</label>
                            <h6>*PDF file format only</h6>
                            <input type="file" name="file" />
                        </div>
                        <div className="form-group mt-3" hidden={inputField.type === "1" ||inputField.type === "2"  }>
                            <label className="mr-2">Upload Your Workshop Proposal:</label>
                            <h6>*PDF file format only</h6>
                            <input type="file" name="file" />
                        </div>

                        <br/>
                        <button>Sign Up</button>

                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form className='dev-form' action="#">
                        <h1>Sign in</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"/></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"/></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"/></a>
                        </div>
                        <span>or use your account</span>
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                        <a href="#">Forgot your password?</a>
                        <button>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn" onClick={() => remove()}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className="ghost" id="signUp" onClick={() => add()}>Sign Up</button>
                        </div>


                    </div>
                </div>
            </div>
        </div>

    );

}

export default Signup;
