import React, { useState } from 'react'
import "./Signin.css"
import { Link } from 'react-router-dom';
// import S from './S';
export default function Signin() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [submit, setSubmit] = useState(false);

    function handleName(e) {
        setName(e.target.value);
    }

    function handlePassword(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (name.length < 3) {
            setSubmit(false);
            alert("name should minimum 3 characters");

        }
        if (password.length < 7) {
            setSubmit(false);
            alert("password should be minimun 8 letters");
        }
        else {
            setSubmit(true);
            clearAll();
        }
    }

    function clearAll() {
        setName('');
        setPassword('');
    }

    function msg() {
        if (submit) {
            return (
                <div>
                    <p>{name}Sign up successfully</p>

                </div>
            );
        }
    }


    return (
        <div className='Container'>
            <form className='form' onSubmit={handleSubmit}>
                <h2>Sign-In</h2>
                <label htmlFor='name'>User Name</label>
                <input type='text' id='name' value={name} onChange={handleName} required />

                <label htmlFor='password'>Password</label>
                <input type='text' id='password' value={password} onChange={handlePassword} required />
               
                <button type='submit'  id='btn'>Submit</button>
            </form>
            <div className='last'>
                 <p className='p1'>if u have alredy an account?</p>
                 <Link className='signinkey' to='/'>Sign-Up</Link>
                 </div>
            <div className='msg'>
                {msg()}
            </div>

        </div>
    )
}
