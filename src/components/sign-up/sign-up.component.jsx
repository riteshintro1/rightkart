import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../button-component/button.component'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utl'
import './sign-up.style.scss'

class SignUp extends React.Component{
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            conformPassword:''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, conformPassword } = this.state;
        if (password === conformPassword) {
            alert("password don't match")
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });
            
            this.setState(
                {
                    displayName: '',
                    email: '',
                    password: '',
                    conformPassword: ''
                }
            )

        } catch (error) {
            console.error(error);
        }
    }
    handleCange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value});
     }
    render() {
        const { displayName, email, password, conformPassword } = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleCange}
                        label='Display Name'
                        require
                    />
                        <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleCange}
                        label='email'
                        require
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleCange}
                        label='password'
                        require
                    />
                      <FormInput
                        type='password'
                        name='consformPassword'
                        value={conformPassword}
                        onChange={this.handleCange}
                        label='consformPassword'
                        require
                    />
                    
                  <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </div>
        );
    }
}
export default SignUp;