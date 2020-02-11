import React, { useState } from "react";
import { useStateValue } from "../../state/context";
import CONSTANTS from "../../state/constants";
import styles from "./styles";

export default function Home() {
  const [state, setState] = useState({
    name: ""
  });

  const handleChange = ({ target }) => {
    setState({
      ...state,
      [target.name]: target.value
    });
  };

  const [global, dispatch] = useStateValue();
  const loginUser = () => {
    dispatch({
      type: CONSTANTS.UPDATE_USER,
      payload: state
    });
  };

  const logoutUser = () => {
    dispatch({
      type: CONSTANTS.LOGOUT_USER
    });
  };

  return (
    <>
      <h1>{global.user.name}</h1>
      <input
        type="text"
        name="name"
        value={state.name}
        onChange={handleChange}
      />
      <br />
      <Button onClick={loginUser}>Login</Button>
      <Button onClick={logoutUser}>Logout</Button>
    </>
  );
}

function Button({ children, ...rest }) {
  return (
    <button {...rest} style={styles.button}>
      {children}
    </button>
  );
}
