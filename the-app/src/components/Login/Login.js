import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./style.css";
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object({
  userName:
    Yup.string().min(8).required("Zorunlu alan") ||
    Yup.string().email.required("Email adresi geçerli değil"),
  password: Yup.string().required("Zorunlu alan"),
});

const Login = (props) => {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        userName: "",
        password: "",
      },
      validationSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });

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
              value={values.userName}
              onBlur={handleBlur}
            />
            {errors.userName && touched.userName && (
              <div className="error">{errors.userName} </div>
            )}

            <br></br>

            <input
              type="password"
              name="password"
              placeholder="Şifre"
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
            />
            {errors.password && touched.password && (
              <div className="error">{errors.password} </div>
            )}
            <br></br>
            <button type="submit" onClick={()=>navigate("/dashboard")}> Giriş Yap </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
