import React from "react";
import classes from "../SignUp/SignUp.module.css";
import Box from "@mui/material/Box";
import CircleIcon from "@mui/icons-material/Circle";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signup } from "../../services/API";
import * as Yup from "yup";

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      confirmPassword: "",
      password: "",
      userName:"",
      email: "",
      role: "",
      companyName: "",
      isAgree: false,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Please Enter your email"),
      password: Yup.string()
        .required("Please Enter your password")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),

      confirmPassword: Yup.string()
        .required("Please Confirm your password")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),

      role: Yup.string().required("Please choose one option"),
      userName: Yup.string().required("Please enter your name"),
      companyName: Yup.string().required("Please Enter your company name"),
      isAgree: Yup.bool().oneOf(
        [true],
        "You need to accept the terms and conditions"
      ),
    }),
    onSubmit: async (values) => {
      // alert(JSON.stringify(values, null, 2));
      let requestBody = {
        confirmPassword: values.confirmPassword,
        password: values.password,
        userName:values.userName,
        email: values.email,
        role: values.role,
        companyName: values.companyName,
        isAgree: values.isAgree,
      };
      const response = await signup(requestBody);
console.log("response",response)
         if (response.status == 200) {
          navigate("/login",{replace:true});
           } else {
          alert( "You are already a user.")
          formik.resetForm()
           }
    },
  });
  const navigate = useNavigate();

  const onClickSignIn = () => {
    navigate("/login");
  };
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
                Get Started
              </Typography>
            </Box>

            <Box className={classes.pleaseEnterContainer}>
              <Typography
                sx={{ fontSize: 15, color: "#808080" }}
                gutterBottom
                component="div"
              >
                Please complete to create your account.
              </Typography>
            </Box>
            <Box
              sx={{
                height: "90px",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // backgroundColor:'yellow'
              }}
            >
              <FormControl variant="standard">
                <label
                  style={{
                    alignSelf: "flex-start",
                    display: "flex",
                    fontSize: "16px",
                    marginBottom: "3px",
                    fontFamily: "sans-serif",
                  }}
                >
                 Name
                </label>
                <input
                  className={classes.email}
                  placeholder="userName"
                  id="userName"
                  type="text"
                  {...formik.getFieldProps("userName")}
                />
                {formik.touched.userName && formik.errors.userName ? (
                  <div style={{ color: "red" }}>{formik.errors.userName}</div>
                ) : null}
              </FormControl>
            </Box>
            <Box
              sx={{
                height: "90px",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // backgroundColor:'yellow'
              }}
            >
              <FormControl variant="standard">
                <label
                  style={{
                    alignSelf: "flex-start",
                    display: "flex",
                    fontSize: "16px",
                    marginBottom: "3px",
                    fontFamily: "sans-serif",
                  }}
                >
                  Email address
                </label>
                <input
                  className={classes.email}
                  placeholder="Email"
                  id="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div style={{ color: "red" }}>{formik.errors.email}</div>
                ) : null}
              </FormControl>
            </Box>
            <Box
              sx={{
                height: "90px",
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
                    marginBottom: "3px",
                    fontFamily: "sans-serif",
                  }}
                >
                  Password
                </label>
                <input
                  className={classes.email}
                  type="password"
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
            {formik.touched.password && formik.errors.password ? (
              <div style={{ color: "red" }}>{formik.errors.password}</div>
            ) : null}
            <Box
              sx={{
                height: "90px",
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
                    marginBottom: "3px",
                    fontFamily: "sans-serif",
                  }}
                >
                  Confirm Password
                </label>
                <input
                  className={classes.email}
                  type="password"
                  placeholder="Confirm password"
                  id="confirmPassword"
                  name="confirmPassword"
                  label="Password"
                  variant="outlined"
                  onChange={formik.handleChange}
                  value={formik.values.confirmPassword}
                />
              </FormControl>
            </Box>
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div style={{ color: "red" }}>
                {formik.errors.confirmPassword}
              </div>
            ) : null}
            <Box
              sx={{
                height: "35px",
                width: "80%",
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                  sx={{ flexDirection: "row", display: "flex" }}
                >
                  <FormControlLabel
                    control={<Radio />}
                    label="As Company"
                    name="role"
                    value="Admin"
                    onChange={formik.handleChange}
                  />
                  <FormControlLabel
                    control={<Radio />}
                    label="As an individual"
                    name="role"
                    value="User"
                    onChange={formik.handleChange}
                  />
                </RadioGroup>
              </FormControl>
            </Box>
            {formik.touched.role && formik.errors.role ? (
              <div style={{ color: "red" }}>{formik.errors.role}</div>
            ) : null}
            <Box
              sx={{
                height: "80px",
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
                    marginBottom: "3px",
                    fontFamily: "sans-serif",
                  }}
                >
                  Company Name
                </label>
                <input
                  className={classes.email}
                  type="text"
                  placeholder="Company Name"
                  id="companyName"
                  name="companyName"
                  label="companyName"
                  variant="outlined"
                  onChange={formik.handleChange}
                  value={formik.values.companyName}
                />
              </FormControl>
            </Box>
            {formik.touched.companyName && formik.errors.companyName ? (
              <div style={{ color: "red" }}>{formik.errors.companyName}</div>
            ) : null}
            <Box
              sx={{
                height: "60px",
                width: "80%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked={formik.values.acceptTerms} />}
                  id="isAgree"
                  name="isAgree"
                  label="I agree with terms and conditions"
                  onChange={formik.handleChange}
                />
              </FormGroup>
            </Box>
            {formik.touched.isAgree && formik.errors.isAgree ? (
              <div style={{ color: "red" }}>{formik.errors.isAgree}</div>
            ) : null}
            <Box
              sx={{
                height: "80px",
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
                  fontSize: "12px",
                  fontFamily: "sans-serif",
                }}
                startIcon={<ExitToAppIcon />}
              >
                Create Account
              </Button>
              <Button
                onClick={(e) => formik.resetForm()}
                variant="outlined"
                sx={{ width: "48%", height: "45px", color: "#2e5bff" }}
              >
                Cancel
              </Button>
            </Box>
            <Box
              sx={{
                width: "80%",
                height: "25px",
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
                Already have an account?
              </Typography>
              <Typography
                onClick={() => onClickSignIn()}
                sx={{
                  fontSize: 15,
                  color: "#2e5bff",
                  marginLeft: "5px",
                  cursor: "pointer",
                }}
                gutterBottom
                component="div"
              >
                Sign in
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

export default SignUp;
