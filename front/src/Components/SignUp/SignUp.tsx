import React,{useState,useEffect} from 'react';
import { Typography, TextField, Button } from '@mui/material';
import { Grid } from '@mui/material';
import { useStyles } from './Styles';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { login,register } from "../../services/apiCalls";
const SignUp = () => {
    const classes = useStyles();
    
     //@ts-ignore
    
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    //@ts-ignore
    const { isFetching, error } = useSelector((state) => state.user);
    const handleClick = (e:any) => {
        e.preventDefault();
        register(dispatch, { username,email, password });
      };
    return (
        <div style={{margin:"auto", height:"auto"}}>
            <Typography component="h1" variant="h5" style={{marginTop:"30px"}}>
                Register
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
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            onChange={(e) => setEmail(e.target.value)}
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
                    onClick={handleClick}>
                    Sign Up
                </Button>
                <Grid >
                    Already have an account? <Link to="/signIn">Sign in </Link>
                </Grid>
            </form>
            </Grid>
        </div>
    );
};

export default SignUp;