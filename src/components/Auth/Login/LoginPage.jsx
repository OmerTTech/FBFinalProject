import React, { useContext, useState } from "react";
import "../Auth.css";
import { FiAtSign } from "react-icons/fi";
import { IoLockClosedOutline } from "react-icons/io5";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import toast from "react-hot-toast";
import { API } from "../../../services/Api";
import { jwtDecode } from "jwt-decode";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });
  const [emailBorder, setEmailBorder] = useState("");
  const [passwordBorder, setPasswordBorder] = useState("");
  const { setAccessToken } = useContext(AuthContext);

  const getShowPass = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((previnputValues) => ({
      ...previnputValues,
      [name]: value,
    }));

    if (name === "email") {
      setEmailBorder("");
    } else if (name === "password") {
      setPasswordBorder("");
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setShowPassword(false);

    if (!inputValues.email && !inputValues.password) {
      toast.error("Email and Password cannot be blank");
      setEmailBorder("red");
      setPasswordBorder("red");
      return;
    } else if (!inputValues.email) {
      toast.error("Email cannot be blank");
      setEmailBorder("red");
      return;
    } else if (!inputValues.password) {
      toast.error("Password cannot be blank");
      setPasswordBorder("red");
      return;
    } else {
      setEmailBorder("");
      setPasswordBorder("");
    }

    try {
      const response = await API.auth.allUsers();
      const users = response.data.map((user) => {
        const decoded = jwtDecode(user.accessToken);
        return { ...decoded, accessToken: user.accessToken };
      });
      const user = users.find((user) => user.email === inputValues.email);

      if (user) {
        if (user.password === inputValues.password) {
          const token = user.accessToken;
          if (rememberMe) {
            localStorage.setItem("accessToken", token);
          } else {
            sessionStorage.setItem("accessToken", token);
          }
          setAccessToken(token);
        } else {
          toast.error("Password is incorrected!");
          setPasswordBorder("red");
        }
      } else {
        toast.error("Account not found!");
        setEmailBorder("red");
      }
    } catch (error) {
      console.error("Login error", error);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <form onSubmit={submitHandler} className="form">
        <div className="flex-column">
          <label>Email </label>
        </div>
        <div className={`inputForm ${emailBorder && "error"}`}>
          <FiAtSign className="login-icons" />
          <input
            type="email"
            className="input"
            placeholder="Enter your Email"
            name="email"
            value={inputValues.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex-column">
          <label>Password</label>
        </div>
        <div className={`inputForm ${passwordBorder && "error"}`}>
          <IoLockClosedOutline className="login-icons" />
          <input
            type={`${showPassword ? "text" : "password"}`}
            className="input"
            placeholder="Enter your Password"
            name="password"
            value={inputValues.password}
            onChange={handleInputChange}
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

        <div className="flex-row">
          <div className="d-flex justify-content-center align-items-center">
            <input
              type="checkbox"
              className="m-1"
              style={{ width: "1rem", height: "1rem" }}
              onChange={(e) => {
                setRememberMe(e.target.checked);
              }}
            />
            <label>Remember me </label>
          </div>
          <span className="span">Forgot password?</span>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign In
        </button>
        <p className="p">
          Don't have an account?{" "}
          <Link to="/register" className="span">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
