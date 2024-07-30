import React, {useContext} from "react";
import logo from "../assets/holberton-logo.jpeg";
import { StyleSheet, css } from "aphrodite";
import {AppContext} from '../App/AppContext';

function Header() {
  const {user, logOut} = useContext(AppContext);
  return (
    <>
      <div className={css(styles.AppHeader)}>
        <img src={logo} className={css(styles.img)} alt="logo" />
        <h1>School dashboard</h1>
      </div>

      {user.isLoggedIn && (
        <section className={css(styles.hello)} id='logOutSection'> 
          Welcome<strong>{user.email}</strong>
          <em>
            <a href="#" onClick={logOut}>
              (logout)
            </a>
          </em>
        </section>  
      )}
    </>
  );
}

const styles = StyleSheet.create({
  AppHeader: {
    fontSize: '1.4rem',
    color: '#e0354b',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '3px solid #e0354b',
  },
  img: {
    width: '200px',
    height: '200px',
  },

  hello: {
    marginTop: '1rem',
  },
});

export default Header;
