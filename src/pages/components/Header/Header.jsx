import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../../../services/userAPI';
import Loading from '../Loading/Loading';
import { HeaderContainer, MainContent, Links } from './HeaderStyle';
import logo from '../../../assets/logo.svg';

class Header extends Component {
  state = {
    username: '',
    isLoadingHeader: false,
  };

  componentDidMount() {
    getUser().then((response) => this.setState({
      username: response.name,
      isLoadingHeader: true,
    }));
  }

  render() {
    const { username, isLoadingHeader } = this.state;
    return (
      <HeaderContainer data-testid="header-component">
        {
          isLoadingHeader ? (
            <MainContent>
              <img src={ logo } alt="logo" />
              <Links>
                <li>
                  <Link
                    to="/search"
                    data-testid="link-to-search"
                  >
                    Pesquisar
                  </Link>
                </li>
                <li>
                  <Link
                    to="/favorites"
                    data-testid="link-to-favorites"
                  >
                    Favoritos
                  </Link>
                </li>
                <li>
                  <Link
                    to="/profile"
                    data-testid="link-to-profile"
                  >
                    Perfil
                  </Link>
                </li>
              </Links>
              <h1 data-testid="header-user-name">{username}</h1>
            </MainContent>
          ) : (
            <Loading />
          )
        }
      </HeaderContainer>
    );
  }
}

export default Header;
