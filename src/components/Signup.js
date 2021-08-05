import React from 'react'
import FormInput from './FormInput'
import SubmitButton from './SubmitBtn'

const Signup = () => {
    return (
        <div className="signup">
          <small>Register, please</small>
          <form>
                <FormInput
                name="username"
                type="username"
                placeholder="username" 

                />
                <FormInput
                name="password"
                type="password"
                placeholder="password"
                />
                <FormInput
                name="confirmPassword"
                type="confirmPassword"
                placeholder="confirmPassword"
                />
                <SubmitButton>Sign Up</SubmitButton>
            </form>
        </div>
    )
}

export default Signup;

