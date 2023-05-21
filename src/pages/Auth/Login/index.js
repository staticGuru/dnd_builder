import React, { useState } from "react";
import classes from "../Login/Login.module.css";
import Box from "@mui/material/Box";
import CircleIcon from "@mui/icons-material/Circle";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import {login} from "../../../services/API"
// import CircularProgress from '@mui/material/CircularProgress';
import useAuth from "../../../hooks/useAuth";



const LoginFile = () => {
  const [textInputError, setTextInputError] = useState("");
  const [loading, setLoading] = useState(true);
  const { setAuth } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Please Enter your email"),
      password: Yup.string().required("Please Enter your password"),
    }),
    onSubmit: async (values) => {
      // alert(JSON.stringify(values, null, 2));
      // setLoading(true);
      let requestBody = { email: values.email, password: values.password };
      console.log(requestBody,'requestbodyyyyyyyy')
      const response = await login(requestBody);
      console.log(response,'responseeeeeeee')
      setLoading(false);
        if (response.status ===200) {
             var result=response.data.result;
          setAuth({...result})
          localStorage.setItem("user",JSON.stringify(result));
        navigate("/Editor",{replace:true});
      }
       else {
        setTextInputError("User Id or Password is incorrect");
        }
    },
  });
  const navigate = useNavigate();

  const onClickSignUp = () => {
    navigate("/signup");
  };
const onClickForgotPassword = () => {
  navigate("/forgotpassword");
}
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box className={classes.mainContainer}>
        <Box className={classes.subContainerLeft}>
          <Box className={classes.middleContainer}>
            <Box className={classes.header}>
              <CircleIcon
                fontSize="large"
                sx={{ color: "#2760fc", marginRight: "10px" }}
              />
            </Box>

            <Box
              sx={{
                height: "45px",
                width: "80%",
                display: "flex",
                flexFlow: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <Typography sx={{ fontSize: 32 }} gutterBottom component="div">
                Sign in to System.
              </Typography>
            </Box>

            <Box className={classes.pleaseEnterContainer}>
              <Typography
                sx={{ fontSize: 15, color: "#808080" }}
                gutterBottom
                component="div"
              >
                Please enter your credentials to proceed.
              </Typography>
            </Box>
            <Box
              sx={{
                height: "100px",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FormControl variant="standard">
                <label
                  style={{
                    alignSelf: "flex-start",
                    display: "flex",
                    fontSize: "16px",
                    fontFamily: "sans-serif",
                  }}
                >
                  Email address
                </label>
                <input
                  className={classes.email}
                  placeholder="Enter email"
                  id="email"
                  name="email"
                  label="Email"
                  variant="outlined"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </FormControl>
            </Box>
            {formik.touched.email && formik.errors.email ? (
              <div style={{ color: "red" }}>{formik.errors.email}</div>
            ) : null}
            <Box
              sx={{
                height: "100px",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FormControl variant="standard">
                <Box
                  sx={{
                    height: "30px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "row",
                  }}
                >
                  <label
                    style={{
                      alignSelf: "flex-start",
                      display: "flex",
                      fontSize: "16px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Password
                  </label>
                  <label onClick={()=> onClickForgotPassword()}
                    style={{
                      alignSelf: "flex-start",
                      display: "flex",
                      fontSize: "16px",
                      fontFamily: "sans-serif",
                      cursor:'pointer'
                    }}
                  >
                    Forgot Password?
                  </label>
                </Box>
                <input
                  type="password"
                  className={classes.email}
                  placeholder="Enter password"
                  id="password"
                  name="password"
                  label="Password"
                  variant="outlined"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
              </FormControl>
            </Box>
            {textInputError && (
              <Box style={{ color: "red" }}>
                <Typography>{textInputError}</Typography>
              </Box>
            )}

            {formik.touched.password && formik.errors.password ? (
              <div style={{ color: "red" }}>{formik.errors.password}</div>
            ) : null}
            <Box
              sx={{
                height: "90px",
                width: "80%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
            <Button
                type="submit"
                variant="contained"
                sx={{
                  width: "48%",
                  height: "45px",
                  backgroundColor: "#2e5bff",
                }}
                startIcon={<ExitToAppIcon />}
                loading={loading}
                loadingPosition="end"
              >
                Sign In
                
              </Button>
              <Button
                onClick={(e) => formik.resetForm(setTextInputError(""))}
                variant="outlined"
                sx={{ width: "48%", height: "45px", color: "#2e5bff" }}
              >
                Cancel
              </Button>
            </Box>
            <Box
              sx={{
                width: "80%",
                height: "45px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{ fontSize: 15, color: "#808080" }}
                gutterBottom
                component="div"
              >
                Dont' have an account?
              </Typography>
              <Typography
                onClick={() => onClickSignUp()}
                sx={{
                  fontSize: 15,
                  color: "#2e5bff",
                  marginLeft: "5px",
                  cursor: "pointer",
                }}
                gutterBottom
                component="div"
              >
                Sign up
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className={classes.subContainerRight}>
          <img
            style={{ width: "45rem", height: "50rem" }}
            src="/pictureWeb.png"
          />
        </Box>
      </Box>
    </form>
  );
};

export default LoginFile;
