import React from 'react';
import { Grid } from '@mui/material';
import { useStyles } from './Styles';

const ClickableBox = () => {
    const classes=useStyles()
    return (
        <Grid container item xs={12} style={{backgroundColor:"white"}}>
            <Grid spacing={2} item xs={12} className={classes.boxContainer}>
                <Grid  className={classes.box}>Display (Clickable)</Grid>
                <Grid   className={classes.box}>Display (Clickable)</Grid>
            </Grid>

        </Grid>
    );
};

export default ClickableBox;