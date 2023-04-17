import React, { useContext, useState } from 'react';
import '../RegisterFile/Register.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEye, faEyeSlash, faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Providers/AuthProviders';

const Login = () => {
    const [showPass, setShowPass] = useState(false);
    const { signInUser } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');


    const signInFun = (e) => {
        e.preventDefault();

        signInUser(email, pass)
            .then(res => {
                console.log(res.user)
            }).catch(err => {
                console.log(err.message)
            })
        e.target.form.reset()
    }


    return (
        <div className='containerr'>
            <form className='form signUp'>
                <h2>Sign In</h2>

                <div className="inputBox">
                    {/* <input type="email" required />     type email dile prb hosse */}
                    <input onBlur={(e) => setEmail(e.target.value)} type="text" required />
                    <FontAwesomeIcon className='icone' icon={faEnvelope} />
                    <span>Email Adderss</span>
                </div>

                <div className="inputBox">
                    <input onBlur={(e) => setPass(e.target.value)} type={`${showPass ? "text" : "password"}`} required />
                    <FontAwesomeIcon className='icone' icon={faUnlockKeyhole} />
                    <span>Password</span>
                    <i>{
                        showPass ? <FontAwesomeIcon onClick={() => setShowPass(!showPass)} icon={faEye} ></FontAwesomeIcon> :
                            <FontAwesomeIcon onClick={() => setShowPass(!showPass)} icon={faEyeSlash} ></FontAwesomeIcon>
                    }</i>
                </div>

                <div className="inputBox">
                    <input onClick={signInFun} type="submit" value="Create Account" />
                </div>

                <p>Don't have an account ? <Link to={"/register"} >Sign Up</Link> </p>


            </form>

        </div>








        // <div className='containerr'>
        //     <form className='form signUp'>
        //         <h2>Sign In</h2>
        //         <div className="inputBox">
        //             <input type="email" required />
        //             <FontAwesomeIcon className='icone' icon={faEnvelope} />
        //             <span>Email Adderss</span>
        //         </div>
        //         <div className="inputBox">
        //             <input type="Password" required />
        //             <FontAwesomeIcon className='icone' icon={faUnlockKeyhole} />
        //             <span>Password</span>
        //         </div>
        //         <div className="inputBox">
        //             <input type="submit" value="Create Account" />
        //         </div>
        //         <p>Don't have an account ? <Link to={"/register"} >Sign Up</Link> </p>
        //     </form>
        // </div>
    );
};

export default Login;