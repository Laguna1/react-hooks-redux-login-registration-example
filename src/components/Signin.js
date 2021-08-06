import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


import FormInput from './FormInput';
import SubmitButton from './SubmitBtn';
import { sessionService } from 'redux-react-session';
import { withRouter } from 'react-router';

const SignIn = ({history}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    axios({
      method: 'post',
      url: 'http://localhost:3000/api/v1/authenticate',
      data: {
        user: {
          username,
          password,
        },
      },
    })
    .then(({ data: res }) => {
        const { data: { id } } = res;
        const { data: { token } } = res;

        sessionService.saveSession({token})
        .then(() => {
            sessionService.saveUser({ id })
              .then(() => {
                history.push('/');
              });
        });
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.log(err);
      });
  };

  const handleUsernameChange = (event) => {
    const { value } = event.target;
    setUsername(value);
  };

  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="username"
          type="username"
          handleChange={handleUsernameChange}
          value={username}
          placeholder="username"
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handlePasswordChange}
          placeholder="password"
        />
        <div>
          <SubmitButton> Sign in </SubmitButton>
        </div>
      </form>
    </div>
  );
};

SignIn.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func,
    }).isRequired,
};

export default withRouter(SignIn);
