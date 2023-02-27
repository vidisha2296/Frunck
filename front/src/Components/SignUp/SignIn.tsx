import React,{useState} from 'react';
import { Typography, TextField, Button } from '@mui/material';
import { Grid } from '@mui/material';
import { useStyles } from './Styles';
import { Link } from 'react-router-dom';
import { login } from "../../services/apiCalls";
import { useDispatch, useSelector } from "react-redux";
const SignIn = () => {
    const classes = useStyles();
    const [username, setUsername] = useState("");
   
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    //@ts-ignore
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e:any) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
    return (
        <div style={{margin:"auto", height:"auto"}}>
        <Typography component="h1" variant="h5" style={{marginTop:"30px"}}>
        Sign in
        </Typography>
        <Grid> 
        <form className={classes.form} noValidate>
            <Grid container spacing={2} item xs={6} style={{margin:"auto"}}>
                <Grid item xs={12}>
                    <TextField
                        autoComplete="fname"
                        name="UserName"
                        variant="outlined"
                        required
                        fullWidth
                        id="firstName"
                        label="User Name"
                        autoFocus
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Grid>
            </Grid>
            <Button
                type="submit"
                className={classes.submit}
                onClick={handleClick}
                >
               Sign in
            </Button>
            <Grid >
                Dont have an account? <Link to="/signUp">Sign Up </Link>
            </Grid>
        </form>
        </Grid>
    </div>
    );
};

export default SignIn;