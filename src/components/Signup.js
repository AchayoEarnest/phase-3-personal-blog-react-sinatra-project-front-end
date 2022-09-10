import './Signup.css';
import { Button, Form } from 'semantic-ui-react'


import React from 'react'

function Signup() {
  return (
    <div className='Form_Container'>
        
        <div class='Form_Inner_Container'>
            <Form>
          <Form.Group widths='equal'>
          <h3 className='Sign_H3'>Signup</h3> 
                      <Form.Input
                        fluid
                        id='form-subcomponent-shorthand-input-first-name'
                        label='First Name'
                        type='text'
                          placeholder='First name'
                      />
                      <Form.Input
                        fluid
                        id='form-subcomponent-shorthand-input-first-name'
                        label='Last Name'
                        type='text'
                          placeholder='Last name'
                      />

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
                      <Form.Input
                        fluid
                        id='form-subcomponent-shorthand-input-last-name'
                        label='Confirm Password'
                        type='password'
                        placeholder='Confirm Password'
                      />
                    <input type="file" id="myFile" name="filename" ></input>
                  </Form.Group>
                 
                  <Button>Submit</Button>
                </Form>
        </div>
        
        
  </div>
  )
}

export default Signup