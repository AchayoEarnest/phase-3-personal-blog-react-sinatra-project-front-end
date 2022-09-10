import React, { useEffect, useRef, useState } from 'react'
import {Button, Form } from 'semantic-ui-react'
import './Login.css'
import { Link } from 'react-router-dom';
import Home from "./Home"

const Login = () => {
    const userRef = useRef();
    const errRef = useRef();


    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);


        // useEffect(() => {
        //     errMsg('');
        // }, []) 

        useEffect(() => {
            setErrMsg('');
        }, [user, pass])
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user, pass);
        setUser('');
        setPass('');
        setSuccess(true);
    }



    return (    
        <>
            {success?(
                <section>
                    {/* <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="#">Go to Home</a>
                    </p> */}
                    <Home />
                </section>
            
            ) : (
                <section className='Form_Container'>
                <p ref={errRef} className={errMsg? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}
                
                </p>
            
                <div class='Form_Inner_Container'>
                    <h3 className='Login_Head'>Login</h3>
                
                    <Form onSubmit={handleSubmit}>
                        <Form.Group widths='equal'>
                        <label htmlFor='username'>Username</label>
                            <Form.Input
                                fluid
                                id='username'                            
                                type='text'
                                ref={ userRef }
                                autoComplete="off"
                                placeholder='First name'
                                onChange={ (e) => setPass(e.target.value) }
                                value={user}
                                required
                                
                            />
                        <label htmlFor='password'>Password</label>
                            <Form.Input
                                fluid
                                id='password'
                                type='password'
                                autoComplete="off"
                                placeholder='Password'
                                onChange={ (e) => setUser(e.target.value) }
                                value={pass}
                                required
                            />
                        </Form.Group>
                        <Button>Sign In</Button>
                        <br />
                        Need an Account?
                        <Link to='/signup' className='Nav_Links_2'>Signup</Link>
                        </Form>
                </div>       
            
      </section>
                    
        )

        }
        
        </>
        
    
)
}

export default Login
