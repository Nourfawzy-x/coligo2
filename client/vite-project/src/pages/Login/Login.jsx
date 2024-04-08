import React, { useState, useEffect } from "react";
import { TextField, Button, Typography } from "@mui/material";
import img from "../../../src/assets/Login-rafiki.png";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import { TbFidgetSpinner } from "react-icons/tb";
import axios from "axios";
import { loginSchemaValidation } from "../../schema/LoginValidation";
import { useContext } from "react";
import { userContext } from "../../context/UserContext";

function Login() {
  const navigate = useNavigate();
  const { setUserToken, setUserName, userToken } = useContext(userContext);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [loading, setLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const onSubmit = async (values) => {
    setLoading(true);

    try {
      let data = await axios.post(`http://localhost:3000/users/signIn`, values);
      console.log(data.status);
      if (data.status === 200) {
        setLoading(false);
        localStorage.setItem("userToken", data.data.token);
        toast.success("Successfully Login");
        //   localStorage.setItem("userName", response.data.name);
        setUserToken(data.data.token);
        console.log("userToken", userToken);
        navigate("/dashboard");
      }
    } catch (error) {
      // setErrorMessage(err.response.data.message);
      console.log(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchemaValidation,
    onSubmit: onSubmit,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "95vh",
      }}
    >
      <div
        style={{
          marginInline: "5%",
          display: "flex",
          justifyContent: "center",
          width: "70%",
          alignItems: "center",
        }}
      >
        {windowWidth >= 1000 && (
          <div
            style={{
              width: "50vw",
              height: "95vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={img} alt="" style={{ width: "100%", height: "90%" }} />
          </div>
        )}
        <div
          style={{
            width: "50vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1 style={{ color: "rgb(34, 34, 34)", marginBottom: "30px" }}>
            login by email{" "}
          </h1>
          {errorMessage && (
            <Typography variant="body2" color="error" paragraph>
              {errorMessage}
            </Typography>
          )}
          <form onSubmit={formik.handleSubmit}>
            <TextField
              id="outlined-basic"
              label="Email"
              type="email"
              variant="outlined"
              name="email"
              required
              size="small"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              sx={{ display: "block", marginBottom: "10%" }}
            />
            {formik.errors.email && formik.touched.email && (
              <div style={{ width: "92%", color: "red", marginBottom: "5%" }}>
                {formik.errors.email}
              </div>
            )}
            <TextField
              id="outlined-basic"
              label="Password"
              required
              type="password"
              name="password"
              variant="outlined"
              size="small"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              style={{ display: "block", marginBottom: "10%" }}
            />
            {formik.errors.password && formik.touched.password && (
              <div style={{ width: "92%", color: "red", marginBottom: "10%" }}>
                {formik.errors.password}
              </div>
            )}

            <Button
              variant="outlined"
              className="btn"
              style={{ borderRadius: "5px", position: "relative" }}
              type="submit"
              disabled={!(formik.isValid && formik.dirty)}
            >
              {loading ? (
                <TbFidgetSpinner
                  size={24}
                  sx={{ color: "#fff", position: "absolute" }}
                />
              ) : (
                "Log in"
              )}
            </Button>
          </form>

          <ToastContainer />
          <p style={{ fontSize: "20px", textAlign: "center", width: "330px" }}>
            <span style={{ opacity: "0.8" }}>Already have an account?</span>
            <Link
              to={"/Register"}
              style={{ color: "#78aaa1", textDecoration: "none" }}
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
