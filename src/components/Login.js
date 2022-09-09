import React from 'react'
import {Button, Form } from 'semantic-ui-react'
import './Login.css'
import { Link } from 'react-router-dom';

const FormExampleSubcomponentId = () => (
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

export default FormExampleSubcomponentId
