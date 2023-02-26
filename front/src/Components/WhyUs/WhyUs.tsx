import React from 'react';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import UpdateIcon from '@mui/icons-material/Update';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import { Grid, Box } from '@mui/material';
import { useStyles } from './Styles';

const WhyUs = () => {
    const classes = useStyles();

    const products = [
        {
            icon: <DesignServicesOutlinedIcon />,
            title: "Customized Designs",
            details: "We believe that your home décor should be a reflection of your personality &lifestyle. Everything is tailored to your aesthetic and specific needs "
        },
        {
            icon: <StarBorderIcon />,
            title: "Quality Materials",
            details: "Superior Quality materials, traditional craftsmanship, accessories from top multinational brands ensures that you get only the best"
        },
        {
            icon: <UpdateIcon />,
            title: "On-time completion",
            details: "Our highly experienced team, meticulous planning, procurement process & resource deployment ensures faster project delivery every time"
        },
        {
            icon: <LocalOfferOutlinedIcon />,
            title: "Transparent pricing",
            details: "Reverse engineering, technology and resource management helps us provide transparent & competitive pricing without compromising quality"
        },
    ]
    return (
        <Grid container item xs={12} >
            <Grid item xs={12}>
                <div className={classes.why}>
                    why us
                </div>
            </Grid>
            <Grid className={classes.DesignCon}>
                {
                    products.map((product) => (

                        <Grid style={{ backgroundColor: "#ffe033", width: "260px ", height: "220px", padding: "10px" }}>
                            <Grid style={{ width: "100%" }} >
                                <div className={classes.productIcon}>
                                    {product.icon}
                                </div>
                            </Grid>
                            <Box>
                                <h4>{product.title}</h4>
                                <p className={classes.productDetails}>{product.details}</p>
                            </Box>
                        </Grid>

                    ))
                }
            </Grid>
        </Grid>
    );
};

export default WhyUs;