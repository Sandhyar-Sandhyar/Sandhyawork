import React, { useEffect, useState } from 'react'
import "./Spa.css";
export default function Spa() {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [submit,setSubmit]=useState(false);

    useEffect(()=>{
        if(submit && (name || password || email)){
            setSubmit(false)
        }
    },[name,password,email,submit])
    

    function handleName(e){
        setName(e.target.value);
    }

    function handleEmail(e){
        setEmail(e.target.value);
    }

    function handlePassword(e){
        setPassword(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        if(name.length<3){
            alert("name should be more than 3 characters");
        }else if(password.length<8){
            alert("password should be more than 8characters");

        }else{
            setSubmit(true);
            clearAll();
        }
    }

    function clearAll(){
        setName("");
        setEmail("");
        setPassword("");
    }

    function msg(){
        if(submit){
            return(
                <div>
                    <p id='sm'>Sign Up Successful</p>
                </div>
            )
        }
    }

  return (
    <div>
        <div className='container'>
            <h2 className='h1'>Registration Form</h2>
            <form onSubmit={handleSubmit} className='form'>
                <label>Enter User Name</label>
                <input type='text' id='name' value={name} onChange={handleName} required/>

                <label>Enter Email</label>
                <input type='email' id='email' value={email} onChange={handleEmail} required/>

                <label>Enter User Password</label>
                <input type='password' id='password' value={password} onChange={handlePassword} required/>

                <button className='sbm' type='submit'>submit</button>
            </form>
            <div className='msg'>
                {msg()}
            </div>
        </div>
      
    </div>
  )
}
