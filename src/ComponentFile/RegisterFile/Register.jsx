import React from 'react';
import "./Register.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUnlockKeyhole, faUser } from '@fortawesome/free-solid-svg-icons'

const Register = () => {
    return (
        // <div className="main-container bg-green-400">
        <div className='containerr'>
            <form className='form signUp'>
                <h2>Sign Up</h2>

                <div className="inputBox">
                    <input type="text" required />
                    <FontAwesomeIcon className='icone' icon={faUser} />
                    <span>userName</span>
                </div>
                <div className="inputBox">
                    <input type="email" required />
                    <FontAwesomeIcon className='icone' icon={faEnvelope} />
                    <span>Email Adderss</span>
                </div>
                <div className="inputBox">
                    <input type="Password" required />
                    <FontAwesomeIcon className='icone' icon={faUnlockKeyhole} />
                    <span>Creat Password</span>
                </div>
                <div className="inputBox">
                    <input type="password" required />
                    <FontAwesomeIcon className='icone' icon={faUnlockKeyhole} />
                    <span>Confirm Password</span>
                </div>
                <div className="inputBox">
                    <input type="submit" value="Create Account" />
                </div>
                <p>already a member ? <Link to={"/login"} >Log in</Link> </p>


            </form>

        </div>
        // </div>
    );
};

export default Register;