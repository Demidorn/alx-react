import React from "react";
// import "./Login.css";
import { StyleSheet, css } from "aphrodite";

function Login() {
  return (
    <React.Fragment>
      <div className={css(styles.AppBody)}>
        <p>Login to access the full dashboard</p>
        <form className={css(styles.form)}>
          <div className={css(styles.formGroup)}>

          <label htmlFor="email">Email:</label>
          <input className={css(styles.formInput)}  type="email" name="email"></input>
          </div>
          <div className={css(styles.formGroup)}>
          <label htmlFor="password">Password:</label>
          <input className={css(styles.formInput)}  type="password" name="password"></input>
          </div>
          <div className={css(styles.formGroup)}>

          <button className={css(styles.button)}>OK</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  AppBody: {
    fontSize: '1rem',
    padding: '2em',
    height: '45%',
    '@media (max-width: 900px)': {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  
  formInput: {
    margin: '5px 0',
    border: 'none',
  },

  button: {
    margin: ' auto',
    border: '2px solid orange ',
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
  },

  formGroup: {
      marginBottom: '2px',
  },
  
  
});

export default Login;
