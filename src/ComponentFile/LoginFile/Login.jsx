import React from 'react';
import '../RegisterFile/Register.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='containerr'>
            <form className='form signUp'>
                <h2>Sign In</h2>

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
                    <input type="submit" value="Create Account" />
                </div>

                <p>Don't have an account ? <Link to={"/register"} >Sign Up</Link> </p>


            </form>

        </div>
    );
};

export default Login;