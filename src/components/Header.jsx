import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutRequest } from '../actions';
import gravatar from '../utils/gravatar.js'
import logo from '../assets/static/logo_filovideo.png';
import userIcon from '../assets/static/user-icon.png';
import '../assets/styles/components/Header.scss'

const Header = props => {
  const { user } = props
  const hasUser = Object.keys(user).length > 0

  const handleLogaut = () => {
    props.logoutRequest({});
  }
  return (
    <header className="header">

      <Link to="/">
        <img className="header__img" src={logo} alt="FiloVideo" />
      </Link>

      <div className="header__menu">
        <div className="header__menu--profile">
          {hasUser ?
            <img src={gravatar(user.email)} alt={user.email} /> :
            <img src={userIcon} alt="user_icon" />
          }

          <p>Perfil</p>
        </div>
        <ul>

          {hasUser ?
            <li><a href="/">{user.name}</a></li> : 
            null
          }

          {hasUser ?
            <li><a href="#logout" onClick={handleLogaut}>Cerrar sesión</a></li>
            :
            <li>
              <Link to="/login">
                Iniciar Sesión
              </Link>
            </li>
          }

        </ul>
      </div>
    </header>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  logoutRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)