import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/authStyle/signIn.scss";

const SignIn = () => {
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setSignInData((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (signInData.email && signInData.password) {
      localStorage.setItem("token", JSON.stringify(signInData));
      navigate("/upload");
    } else {
      alert("Please enter credentials");
    }
  };

  useEffect(() => {
    const loginToken = localStorage.getItem("token");
    if (loginToken) {
      navigate("/upload");
    }
  }, [navigate]);

  return (
    <div>
      <div className="form_container">
        <form onSubmit={submitHandler}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={signInData.email}
            onChange={inputHandler}
           
            placeholder='jondoe@gmail.com'
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={signInData.password}
            onChange={inputHandler}
            placeholder="**********"
          />
          <p>Forgot password</p>
          <input type="submit" value="Sign In" />
        </form>
      </div>
    </div>
  );
};

export default SignIn;
