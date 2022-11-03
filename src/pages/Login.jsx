import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Loading from './components/Loading';

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
      <main>
        {isLoading ? <Loading /> : (
          <form>
            <input
              type="text"
              name="nickname"
              data-testid="login-name-input"
              value={ nickname }
              onChange={ handleChange }
            />
            <button
              type="button"
              disabled={ !isValid }
              data-testid="login-submit-button"
              onClick={ createUser }
            >
              Entrar
            </button>
          </form>)}
        {redirect && <Redirect to="/search" />}
      </main>
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
