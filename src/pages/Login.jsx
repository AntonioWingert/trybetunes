import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Loading from './components/Loading/Loading';
import { MainContent, Form } from '../Styles/Login';
import logo from '../assets/logo.svg';

class Login extends Component {
  render() {
    const {
      nickname,
      handleChange,
      isValid,
      createUser,
      isLoading,
      redirect,
    } = this.props;
    return (
      <MainContent data-testid="page-login">
        {isLoading ? <Loading /> : (
          <Form>
            <img src={ logo } alt="logo-trybe-tunes" />
            <input
              type="text"
              name="nickname"
              data-testid="login-name-input"
              value={ nickname }
              onChange={ handleChange }
              placeholder="Qual é o seu nome?"
            />
            <button
              type="submit"
              disabled={ !isValid }
              data-testid="login-submit-button"
              onClick={ createUser }
            >
              ENTRAR
            </button>
          </Form>)}
        {redirect && <Redirect to="/search" />}
      </MainContent>
    );
  }
}

Login.propTypes = {
  nickname: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
  createUser: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  redirect: PropTypes.bool.isRequired,
};

export default Login;
