import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  CircularProgress,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PasswordChecklist from "react-password-checklist";
import { validateEmail } from "../until/common";

export default function SignUp(props) {
  const { resgesterRequest, user, loading, error } = props;

  const [fisrtName, setFisrtName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState(0);
  const [address, setAddress] = useState("");
  const [isValid, setIsValid] = useState(false);

  const history = useHistory();

  const handleSubmit = () => {
    resgesterRequest({
      fisrtName,
      lastName,
      userName,
      password,
      mail,
      phone,
      address,
    });
  };

  useEffect(() => {
    if (user.mail) {
      alert("Đăng kí thành công. Vui lòng đăng nhập để tiếp tục");
      history.push("/login");
    }
    if (error) {
      alert(error);
    }
  }, [user, error]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={(e) => setFisrtName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="userName "
                label="Username"
                name="username"
                autoComplete="Username"
                onChange={(e) => setUserName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                type=""
                onChange={(e) => setMail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Phone"
                autoComplete="phone"
                type="number"
                onChange={(e) => setPhone(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Address"
                autoComplete="Address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </Grid>
          </Grid>
          <PasswordChecklist
            rules={["minLength", "specialChar", "number", "capital", "match"]}
            minLength={8}
            value={password}
            valueAgain={confirmPassword}
            onChange={(isValid) => {
              setIsValid(isValid);
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, py: 2 }}
            onClick={handleSubmit}
            disabled={
              !isValid ||
              !userName ||
              !validateEmail(mail) ||
              !fisrtName ||
              !lastName
            }
          >
            Sign Up{" "}
            {loading && (
              <CircularProgress color="success" size={30} sx={{ ml: 2 }} />
            )}
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
