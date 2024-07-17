import React, { useContext, useEffect, useState } from "react";
import "../Auth.css";
import { FiAtSign } from "react-icons/fi";
import { IoLockClosedOutline } from "react-icons/io5";
import { FaRegEye, FaRegEyeSlash} from "react-icons/fa6";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const getShowPass = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setShowPassword(false);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <form onSubmit={submitHandler} class="form">
        <div class="flex-column">
          <label>Email </label>
        </div>
        <div class="inputForm">
          <FiAtSign style={{ fontSize: "1.25rem" }} />
          <input type="text" class="input" placeholder="Enter your Email" />
        </div>

        <div class="flex-column">
          <label>Password</label>
        </div>
        <div class="inputForm">
          <IoLockClosedOutline style={{ fontSize: "1.25rem" }} />
          <input
            type={`${showPassword ? "text" : "password"}`}
            class="input"
            placeholder="Enter your Password"
          />

          {showPassword ? (
            <FaRegEye
              onClick={getShowPass}
              className="mx-2"
              style={{ fontSize: "1.35rem" }}
            />
          ) : (
            <FaRegEyeSlash
              onClick={getShowPass}
              className="mx-2"
              style={{ fontSize: "1.5rem" }}
            />
          )}
        </div>

        <div class="flex-row">
          <div className="d-flex justify-content-center align-items-center">
            <input
              type="checkbox"
              className="m-1"
              style={{ width: "1rem", height: "1rem" }}
            />
            <label>Remember me </label>
          </div>
          <span class="span">Forgot password?</span>
        </div>
        <button type="submit" class="btn btn-primary">
          Sign In
        </button>
        <p class="p">
          Already have an account?
          <Link to="/login" class="span">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
