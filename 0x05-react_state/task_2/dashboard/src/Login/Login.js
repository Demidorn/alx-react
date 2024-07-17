import React, {useEffect, useState} from "react";
import { StyleSheet, css } from "aphrodite";
import PropTypes from "prop-types";

function Login(props) {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enableSubmit, setEnableSubmit] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // setIsLoggedIn(true);
    // props.logIn(e.target.elements.email.value, e.target.elements.password.value);
    props.logIn(email, password);
    // this.setState({isLoggedIn: true});
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (email !== "" && password !== "") {
      setEnableSubmit(true);
    } else {
      if (enableSubmit !== false) {
        setEnableSubmit(false);
      }
    }
  }, [email, password]);

  return (
    <React.Fragment>
      <div className={css(styles.AppBody)}>
        <p>Login to access the full dashboard</p>
        <form className={css(styles.form)} onSubmit={handleLoginSubmit}>
          <div className={css(styles.formGroup)}>
            <label htmlFor="email">Email:</label>
            <input 
            className={css(styles.formInput)}
            type="email"
            name="email"
            value={email}
            onChange={handleChangeEmail}/>
          </div>
          <div className={css(styles.formGroup)}>
            <label htmlFor="password">Password:</label>
            <input className={css(styles.formInput)}
            type="password"
            name="password"
            value={password}
            onChange={handleChangePassword}></input>
          </div>
          <div className={css(styles.formGroup)}>
            <input className={css(styles.button)}
            type='submit'
            value='Submit'
            disabled={!enableSubmit}></input>
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

  input: {
    margin: '10px',
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

Login.PropTypes = {
  logIn: PropTypes.func.isRequired,
};

export default Login;
