import React from 'react';
import { Grid } from '@mui/material';
import { useStyles } from './Styles';

const ClickableBox = () => {
    const classes=useStyles()
    return (
        <Grid container item xs={12} style={{backgroundColor:"white"}}>
            <Grid className={classes.boxContainer}>
                <Grid className={classes.box}>
                    <p>Display (Clickable)</p></Grid>
                <Grid className={classes.box}> <p>Display (Clickable)</p></Grid>
            </Grid>

        </Grid>
    );
};

export default ClickableBox;