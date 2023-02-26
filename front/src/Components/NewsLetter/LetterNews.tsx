import React from 'react';
import { useStyles } from './Styles';
import { Grid } from '@mui/material';
import { Box } from '@mui/material';

const LetterNews = () => {
   const classes=useStyles();
    return (
        <Grid container item xs={12}>
            <Grid className={classes.root}>
                <Box className={classes.letterBorder}>
                    <div className={classes.innerBox}>
                        <div className={classes.letterDiv}>
                            <h5 style={{ margin: "0px", textAlign: "justify", color: "black", fontSize:"15px" }}>Newsletter Sign Up</h5>
                            <p style={{ margin: "3px", textAlign: "justify",color: "gray", fontSize:"14px"}}>
                                Sign up and stay updated on the latest in interior
                                decor, events & Discounts & offers
                            </p>
                        </div>
                        <div className={classes.inputDiv}>
                            <input type="search" placeholder='Your Email Id' className={classes.inputField} />
                            <button style={{
                                backgroundColor: "#ffe033", color: "black", margin: "10px", padding: "7px",
                                border: " 3px solid  #ffe033", borderRadius: "6px", fontSize:"12px"
                            }}>SUBSCRIBE</button>
                        </div>
                    </div>
                </Box>

            </Grid>
        </Grid >
    );
};

export default LetterNews;