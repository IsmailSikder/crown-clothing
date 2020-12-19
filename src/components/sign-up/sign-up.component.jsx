import './sign-up.style.scss'

import React from 'react'
import FormInput from '../form-input/form-input.component'
import { CustomButton } from '../custom-button/custom-button.component'

class SignUp extends React.Component{

    constructor(){
        super()
        this.state ={
            displayName :'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

     handleChange = (event)=>{
        const {name,value} = event.target
        this.setState({[name]:value})
    }
    render(){
        const {displayName,email,password,confirmPassword} = this.state
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Signup with email and password</span>
                <form>
                    <FormInput
                        type ='text'
                        name='displayName'
                        value={displayName}
                        label='Display Name'
                        onChnage={this.handleChange}
                        required
                    />
                   
                    <FormInput
                        type ='email'
                        name='email'
                        value={email}
                        label='Email'
                        onChnage={this.handleChange}
                        required
                    />
                    <FormInput
                        type ='password'
                        name='password'
                        value={password}
                        label='Password'
                        onChnage={this.handleChange}
                        required
                    />
                     <FormInput
                        type ='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        label='Confirm Password'
                        onChnage={this.handleChange}
                        required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp