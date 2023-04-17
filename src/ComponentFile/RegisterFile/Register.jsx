import React, { useContext, useRef, useState } from 'react';
import "./Register.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEye, faEyeSlash, faUnlockKeyhole, faUser } from '@fortawesome/free-solid-svg-icons'
// import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../firebase.init';
import { UserContext } from '../../Providers/AuthProviders';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [againPass, setAgainPass] = useState('');
    const [showPass, setShowPass] = useState(false)
    const [againShowPass, setAgainShowPass] = useState(false)
    const formRef = useRef(null);
    // const auth = getAuth(app);
    
    const { createUser } = useContext(UserContext)

    const registerFun = (e) => {

        e.preventDefault();

        if (name === "" || email === "" || pass === "" || againPass === "") {
            alert("fillUp the fild first")
        } else {
            console.log(name);
            console.log(email);
            console.log(pass);
            console.log(againPass);

            createUser(email, pass)
                .then(res => {
                    console.log(res.user)
                }).catch(err => {
                    console.log(err.message)
                })

            // createUserWithEmailAndPassword(auth, email, pass)
            //     .then(res => {
            //         console.log("successfully login === ", res.user)
            //     }).catch(err => {
            //         console.log(err.message)
            //     })

            setName("");
            setEmail("");
            setPass("");
            setAgainPass("");
        }
        formRef.current.reset();
    }


    return (
        <div className='containerr'>
            <form ref={formRef} className='form signUp'>
                <h2>Sign Up</h2>
                <div className="inputBox">
                    <input onBlur={(e) => setName(e.target.value)} name='name' type="text" required />
                    <FontAwesomeIcon className='icone' icon={faUser} />
                    <span>userName</span>
                </div>
                <div className="inputBox">
                    <input onBlur={(e) => setEmail(e.target.value)} type="text" required />
                    {/* <input onBlur={(e) => setEmail(e.target.value)} type="email" required />  type email dile prb hossse */}
                    <FontAwesomeIcon className='icone' icon={faEnvelope} />
                    <span>Email Adderss</span>
                </div>
                <div className="inputBox">
                    <input onBlur={(e) => setPass(e.target.value)} type={`${showPass ? "text" : "password"}`} required />
                    <FontAwesomeIcon className='icone' icon={faUnlockKeyhole} />
                    <span>Creat Password</span>
                    <i>{
                        showPass ? <FontAwesomeIcon onClick={() => setShowPass(!showPass)} icon={faEye} ></FontAwesomeIcon> :
                            <FontAwesomeIcon onClick={() => setShowPass(!showPass)} icon={faEyeSlash} ></FontAwesomeIcon>
                    }</i>
                </div>
                <div className="inputBox">
                    <input onBlur={(e) => setAgainPass(e.target.value)} type={`${againShowPass ? "text" : "password"}`} required />
                    <FontAwesomeIcon className='icone' icon={faUnlockKeyhole} />
                    <span>Confirm Password</span>

                    <i>{
                        againShowPass ? <FontAwesomeIcon onClick={() => setAgainShowPass(!againShowPass)} icon={faEye} ></FontAwesomeIcon> :
                            <FontAwesomeIcon onClick={() => setAgainShowPass(!againShowPass)} icon={faEyeSlash} ></FontAwesomeIcon>
                    }</i>

                </div>
                <div className="inputBox">
                    <input onClick={registerFun} type="submit" value="Create Account" />
                </div>
                <p>already a member ? <Link to={"/login"} >Log in</Link> </p>
            </form>
        </div>



















        // <div className='containerr'>
        //     <form className='form signUp'>
        //         <h2>Sign Up</h2>
        //         <div className="inputBox">
        //             <input type="text" required />
        //             <FontAwesomeIcon className='icone' icon={faUser} />
        //             <span>userName</span>
        //         </div>
        //         <div className="inputBox">
        //             <input type="email" required />
        //             <FontAwesomeIcon className='icone' icon={faEnvelope} />
        //             <span>Email Adderss</span>
        //         </div>
        //         <div className="inputBox">
        //             <input type="Password" required />
        //             <FontAwesomeIcon className='icone' icon={faUnlockKeyhole} />
        //             <span>Creat Password</span>
        //         </div>
        //         <div className="inputBox">
        //             <input type="password" required />
        //             <FontAwesomeIcon className='icone' icon={faUnlockKeyhole} />
        //             <span>Confirm Password</span>
        //         </div>
        //         <div className="inputBox">
        //             <input type="submit" value="Create Account" />
        //         </div>
        //         <p>already a member ? <Link to={"/login"} >Log in</Link> </p>
        //     </form>
        // </div>
        // </div>
    );
};

export default Register;