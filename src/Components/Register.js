import React from "react";
import styled from "styled-components";

export default function Register(props) {
  let btnclasses = ["btn", "m-1"];
  let btnText, passBox;
  if (props.showPass === true) {
    btnText = "Hide Password";
    passBox = "text";
    btnclasses.push("btn-danger");
  } else {
    btnText = "Show Password";
    passBox = "password";
    btnclasses.push("btn-success");
  }
  const styleRegister = styled.div `
  width 600px;
  &:hover {
    box-shadow:0px 0px 5px gray;
  }
  @media( min-width:0px) and (max-width:600px){
    width: 300px;
  }
  `;
  return (
  
    <styleRegister className="container card p-3 mt-2 ">
      <h1 className="text-center">Registration from</h1>
      <form onSubmit={props.submit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input name="name" type="text" required className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input name="email" type="email" required className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="Password">Password:</label>
          <input
            name="password"
            type={passBox}
            required
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary m-1">
          Register
        </button>
        <button
          type="button"
          className={btnclasses.join(" ")}
          onClick={props.click}
        >
          {btnText}
        </button>
      
      </form>
    </styleRegister>
    
  );
}
