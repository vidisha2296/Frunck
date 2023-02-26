import React from 'react';
import { Grid, Box } from '@mui/material';
import { useStyles } from './Styles';
import furniture8 from "../../Assets/Images/furniture8.jpeg";
import ImageGallery from './ImageGallery';

const Display = () => {
    const classes = useStyles()
    return (
        <Grid container item xs={12} className={classes.menuPart}>
            <Box className={classes.displayBox}>
                {/* <img src={furniture8} alt=""  className={classes.displayImg} /> */}
                <ImageGallery />
            </Box>
            <Box>
                <Box className={classes.boxContain}>
                    <Box className={classes.bigBox}><p>Product info (Clickable)</p></Box>
                    <Box className={classes.smallBox}><p>Product info (Clickable)</p></Box>
                </Box>
                <Box className={classes.boxContain}>
                    <Box className={classes.smallBox}><p>Product info (Clickable)</p></Box>
                    <Box className={classes.bigBox}><p>Product info (Clickable)</p></Box>
                </Box>
            </Box>

        </Grid>
    );
};

export default Display;