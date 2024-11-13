import React, { useState } from 'react'
import './S.css'
import { Link } from 'react-router-dom';

export default function S() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [submit, setSubmit] = useState(false);

    function handleName(e) {
        setName(e.target.value);
    }

    function handleEmail(e) {
        setEmail(e.target.value);
    }

    function handlePassword(e) {
        setPassword(e.target.value);
    }


    function handleSubmit(e) {
        e.preventDefault();
        if (name === '' || password === '' || email === '') {
            alert('pls fill the empty filed(s)');
        }
        if(name.length<3){
            setSubmit(false);
            alert("name should minimum 3 characters")

        }
        if(password.length<7){
            setSubmit(false);
            alert("password should be minimun 8 letters")
        }
        else {
            setSubmit(true);
            clearAll();
        }
    }

    function clearAll() {
        setEmail('');
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
        <div className='Main1'>


        <div className='container'>

             <form className='form' onSubmit={handleSubmit}>
                 <h2>Sign-Up</h2>
                 <label htmlFor='name'>User Name</label>
                 <input type='text' id='name' value={name} onChange={handleName} />
                 
             <label htmlFor='password'>Password</label>
                 <input type='text' id='password' value={password} onChange={handlePassword} />
                 
                 <label htmlFor='email'>Email</label>
                 <input type='email' id='email' value={email} onChange={handleEmail} />
                 
                 <button type='submit' id='btn'>Submit</button>
                 <div className='last'>
                 <p className='p1'>if u have alredy an account?</p>
                 <Link className='signinkey' to='/Signin'>Sign-In</Link>
                 </div>
             </form>
             <div className='msg'>
                 {msg()}

             </div>

        </div> 






        {/*  <div className='container'>

             <form className='form' onSubmit={handleSubmit}>
                 <h2>Sign-Up</h2>
                 <label htmlFor='name'>User Name</label>
                 <input type='text' id='name' value={name} onChange={handleName} />
                 <br /><br />
             <label htmlFor='password'>Password</label>
                 <input type='text' id='password' value={password} onChange={handlePassword} />
                 <br /><br />
                 <label htmlFor='email'>Email</label>
                 <input type='email' id='email' value={email} onChange={handleEmail} />
                 <br /><br />
                 <button type='submit' id='btn'>Submit</button>

             </form>
             <div className='msg'>
                 {msg()}

             </div>

        </div> */}
        </div>
    )
}
