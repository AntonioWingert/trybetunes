import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { getUser, updateUser } from '../services/userAPI';
import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';

class ProfileEdit extends Component {
  state = {
    isLoading: false,
    name: '',
    description: '',
    email: '',
    image: '',
    redirect: false,
  };

  componentDidMount() {
    this.receiveUser();
  }

  receiveUser = async () => {
    this.setState({ isLoading: true });
    const user = await getUser();
    this.setState({
      isLoading: false,
      name: user.name,
      description: user.description,
      email: user.email,
      image: user.image,
    });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  validateButton = () => {
    const { name, description, email, image } = this.state;
    const NUM_LENGTH = 1;
    const validName = name.length > NUM_LENGTH;
    const validDescription = description.length > NUM_LENGTH;
    const validEmail = email.length > NUM_LENGTH;
    const validImage = image.length > NUM_LENGTH;
    return validDescription && validEmail && validImage && validName;
  };

  updateUserInfos = () => {
    const { name, email, description, image } = this.state;
    this.setState({
      isLoading: true,
    }, async () => {
      await updateUser({
        name,
        email,
        image,
        description,
      });
      this.setState({ isLoading: false, redirect: true });
    });
  };

  render() {
    const { isLoading, name, description, email, image, redirect } = this.state;
    return (
      <div data-testid="page-profile-edit">
        <Header />
        { isLoading && <Loading /> }
        <div>
          <label htmlFor="name">
            Insira seu Usuario:
            <input
              id="name"
              data-testid="edit-input-name"
              type="text"
              value={ name }
              onChange={ this.handleChange }
              name="name"
            />
          </label>
          <label htmlFor="email">
            Insira seu Email:
            <input
              id="email"
              data-testid="edit-input-email"
              type="email"
              value={ email }
              onChange={ this.handleChange }
              name="email"
            />
          </label>
          <label htmlFor="description">
            Insira sua Descrição:
            <input
              id="description"
              type="text"
              data-testid="edit-input-description"
              value={ description }
              onChange={ this.handleChange }
              name="description"
            />
          </label>
          <label htmlFor="image">
            Insira a URL da sua imagem:
            <input
              id="image"
              type="text"
              data-testid="edit-input-image"
              value={ image }
              onChange={ this.handleChange }
              name="image"
            />
          </label>
          <button
            data-testid="edit-button-save"
            type="button"
            disabled={ !this.validateButton() }
            onClick={ this.updateUserInfos }
          >
            Salvar

          </button>
        </div>
        {redirect && <Redirect to="/profile" />}
      </div>
    );
  }
}

export default ProfileEdit;
