import React, { useEffect, useRef, useState } from 'react'
import {Button, Form } from 'semantic-ui-react'
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    const userRef = useRef();
    const errRef = useRef();


    const [user, setuser] = useState('');
    const [pass, setPass] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);


    useEffect(() => {
        useRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pass])



    return (        
        <div className='Form_Container'>
        Login
        <div class='Form_Inner_Container'>
            <Form>
                <Form.Group widths='equal'>
                    <Form.Input
                        fluid
                        id='form-subcomponent-shorthand-input-first-name'
                        label='Email'
                        type='email'
                        placeholder='First name'
                    />
                    <Form.Input
                        fluid
                        id='form-subcomponent-shorthand-input-last-name'
                        label='Password'
                        type='password'
                        placeholder='Password'
                    />
                    </Form.Group>
                <Button>Submit</Button>
                <br></br>
                <Link to='/signup' className='Nav_Links_2'>Signup</Link>
                </Form>
        </div>
        
        
  </div>
    
)
}

export default Login
