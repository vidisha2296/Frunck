import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useStyles } from './Styles';
import { Grid, Menu, MenuItem } from '@mui/material';
import { Grid3x3Rounded } from '@mui/icons-material';


const Header = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleMouseOver = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [anchorE2, setAnchorE2] = React.useState(null);
    const handleMouseOver2 = (event: any) => {
        setAnchorE2(event.currentTarget);
    };
    const handleClose2 = () => {
        setAnchorE2(null);
    };
    return (
        <Grid className={classes.header}>
                <Grid container  item xs={12}>
                    <Grid item xs={1} >
                        <IconButton>
                            Frunk
                        </IconButton>
                    </Grid>
                    <Grid item xs={11} >
                        <Box className={classes.upDiv}>
                            <Grid className={classes.signPart}>
                                <p>Partner with us</p>
                                <p>Login/Register</p>
                            </Grid>

                        </Box>
                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                            <div className={classes.menuPart}>
                                <p>
                                    Home
                                </p>

                                <p onMouseOver={handleMouseOver}>
                                    Design Ideas
                                </p>
                                <Menu
                                    // className={classes.dropdown}
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}>
                                    <MenuItem onClick={handleClose}>Futuristic living room</MenuItem>
                                    <MenuItem onClick={handleClose}>Elegant Kitchen Designs</MenuItem>
                                    <MenuItem onClick={handleClose}>Luxurious Bedroom Interiors</MenuItem>
                                    <MenuItem onClick={handleClose}>Kids Bedroom Design</MenuItem>
                                    <MenuItem onClick={handleClose}>Space Saving Designs</MenuItem>
                                    <MenuItem onClick={handleClose}>Bathroom Designs</MenuItem>
                                </Menu>
                                <p onMouseOver={handleMouseOver2}>
                                    Home Interior
                                </p>
                                <p onMouseOver={handleMouseOver2}>
                                    Home Interior 2
                                </p>
                                <p onMouseOver={handleMouseOver2}>
                                    Home Interior 3
                                </p>
                                <p onMouseOver={handleMouseOver2}>
                                    Home Interior 4
                                </p>
                            </div>
                        </div>

                    </Grid>
                </Grid>
        </Grid>
    );
};

export default Header;