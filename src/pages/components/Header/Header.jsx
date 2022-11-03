import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../../../services/userAPI';
import Loading from '../Loading/Loading';

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
      <header data-testid="header-component">
        {
          isLoadingHeader ? (
            <div>
              <span data-testid="header-user-name">{username}</span>
              <nav>
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
              </nav>
            </div>
          ) : (
            <Loading />
          )
        }
      </header>
    );
  }
}

export default Header;
