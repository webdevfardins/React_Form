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
  const Stylebtn = styled.button`
    display:${(props) => (props.flag === "1" ? "inline-block" : "block")};
    padding: 10px; 
    background-color:${(props) => props.bgcolor};
    border:none;
    color:white;
    width:${(props) => (props.flag === "1" ? "45%" : "100%")};
    borser-redius:5px;
    margin:5px
 `;
  const StyleRegister = styled.div`
  width 600px;
  &:hover {
    box-shadow:0px 0px 5px gray;
  }
  @media( min-width:0px) and (max-width:600px){
    width: 300px;
  }
  `;
  return (
    <StyleRegister className="container card p-3 mt-2 ">
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
        </button><br/>

        <Stylebtn type="button" flag="1" bgcolor="orange">
          Login{" "}
        </Stylebtn>
        <Stylebtn type="button" flag="1" bgcolor="green">
          Login with Google{" "}
        </Stylebtn>
        <Stylebtn type="button" flag="0" bgcolor="blue">
          Login with Facebook{" "}
        </Stylebtn>
      </form>
    </StyleRegister>
  );
}
