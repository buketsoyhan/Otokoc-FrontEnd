import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import Modal from "../Modal/index";
import * as Yup from "yup";
import "./style.css";
import { mergeAll } from "ramda";
import { useNavigate } from "react-router-dom";

const validationUserSchema = Yup.object({
  username: Yup.string().min(8).required("Name Zorunlu alan"),
  password: Yup.string().required("Zorunlu alan"),
});

const validationEmailSchema = Yup.object({
  username: Yup.string()
    .email("Must be a valid email")
    .required("Email Zorunlu alan"),
  password: Yup.string().required("Zorunlu alan"),
});

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidate] = useState([]);

  const [errors, setErrors] = useState([]);

  useEffect(() => {
    validation();
  }, [username, password]);

  const validation = () => {
    username.includes("@")
      ? validationEmailSchema
          .validate({ username, password }, { abortEarly: false })
          .then(() => {
            setErrors({});
            // successCallback(formValues);
          })
          .catch((err) => {
            if (err.name === "ValidationError") {
              const errs = mergeAll(
                err.inner.flatMap((e) => ({ [e.path]: e.errors }))
              );
              setErrors(errs);
            }
          })
      : validationUserSchema
          .validate({ username, password }, { abortEarly: false })
          .then(() => {
            setErrors({});
            // successCallback(formValues);
          })
          .catch((err) => {
            if (err.name === "ValidationError") {
              const errs = mergeAll(
                err.inner.flatMap((e) => ({ [e.path]: e.errors }))
              );
              setErrors(errs);
            }
          });
  };

  const handleChange = (e) => {
    e.target.name === "userName"
      ? setUsername(e.target.value)
      : setPassword(e.target.value);
  };
  //const formValues = { username, password };
  const handleSubmit = (e) => {
    e.preventDefault();

    if(errors.username  === undefined  && errors.password === undefined ? navigate("/dashboard") : null)

    setErrors([]);
    setUsername("");
    setPassword("");
    console.log(errors);
    console.log(errors.username);
  };

  const navigate = useNavigate();

  return (
    <div className="login">
      <div className="header ">
        <span className="headerStrongText">
          <strong>Otokoç</strong>
          <span className="headerNormalText">Otomotiv</span>
        </span>
      </div>
      <div className="loginForm">
        <h2 className="loginTitle">Giriş</h2>
        <div className="formArea">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="userName"
              placeholder="Email/Kullanıcı Adı"
              onChange={handleChange}
              value={username}
            />
{/* 
            {validated !== [] && 
              alert("asax")
              
            } */}

           

            <br></br>

            <input
              type="password"
              name="password"
              placeholder="Şifre"
              onChange={handleChange}
              value={password}
            />
            {/* {errors.password && touched.password && (
              <div className="error">{errors.password} </div>
            )} */}
            <br></br>
            <button type="submit" onClick={handleSubmit}> Giriş Yap </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
