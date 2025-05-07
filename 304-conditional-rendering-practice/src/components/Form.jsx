import React from "react";
import Input from "./Input";
import SubmitButton from "./Button";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {props.registered == false && <input type="password" placeholder="Confirm Password" />}
      {props.registered? <SubmitButton text="Login"/> : <SubmitButton text="Register"/>}
    </form>
  );
}

export default Form;
