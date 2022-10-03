import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
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
import * as constants from "../constants";

export default function ResetPassword(props) {
  const { resetRequest, data, loading, error } = props;
  const { search } = useLocation();
  console.log("data",data);
  const [isValid, setIsValid] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async () => {
    // await fetch(constants.DOMAIN + "/reset-password", {
    //   method: "POST",
    //   //   headers: {
    //   //     "Set-Cookie": `token=${search.split("=")[1]}`,
    //   //     withCredentials: true,
    //   //     credentials: "include",
    //   //   },
    //   body: JSON.stringify({ password, token: search.split("=")[1] }),
    // });
    resetRequest({ password, token: search.split("=")[1] });
  };

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
          Reset Password
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={2}>
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
            disabled={!isValid}
          >
            Submit
            {loading && (
              <CircularProgress color="success" size={30} sx={{ ml: 2 }} />
            )}
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
