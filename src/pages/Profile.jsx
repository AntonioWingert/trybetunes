import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';

class Profile extends Component {
  state = {
    isLoading: false,
    userInfo: {},
  };

  componentDidMount() {
    this.receiveUser();
  }

  receiveUser = async () => {
    this.setState({ isLoading: true });
    const user = await getUser();
    this.setState({
      isLoading: false,
      userInfo: user,
    });
  };

  render() {
    const { isLoading, userInfo } = this.state;
    return (
      <div data-testid="page-profile">
        <Header />
        {isLoading && <Loading />}
        <div>
          <img
            src={ userInfo.image }
            data-testid="profile-image"
            alt={ userInfo.name }
          />
          <Link to="/profile/edit">Editar perfil</Link>
          <p>Nome</p>
          <span>{userInfo.name}</span>
          <p>Email</p>
          <span>{userInfo.email}</span>
          <p>Descrição</p>
          <span>{userInfo.description}</span>
        </div>
      </div>
    );
  }
}

export default Profile;
