import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import { useStyles } from './Styles';
import { Grid, Menu, MenuItem } from '@mui/material';
import { Grid3x3Rounded } from '@mui/icons-material';
import { Link } from 'react-router-dom';


const drawerWidth = 200;
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
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
    return (
        <Grid className={classes.header}>
            {/* <AppBar style={{backgroundColor:"white", color:"gray"}}> */}
                <Grid container item xs={12}>
                    <Grid item xs={1} >
                        <IconButton>
                            Frunk
                        </IconButton>
                    </Grid>
                    <Grid item xs={11} >
                        <Box className={classes.upDiv}>
                            <Grid className={classes.signPart}>
                                <p>Partner with us</p>
                                <Link to="/signUp"><p>Login/Register</p></Link>
                            </Grid>
                        </Box>
                        <div className={classes.headLast}>
                            <div className={classes.menuPart}>
                                <Link to="/">
                                    <p>
                                        Home
                                    </p>
                                </Link>
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
                                    Sofa & Furniture

                                </p>
                                <p onMouseOver={handleMouseOver2}>
                                    Custom Furniture
                                </p>
                                <p onMouseOver={handleMouseOver2}>
                                    Home Renovate
                                </p>
                                {/* <Menu
                                // className={classes.dropdown}
                                anchorEl={anchorE2}
                                keepMounted
                                open={Boolean(anchorE2)}
                                onClose={handleClose2}
                            >
                                <MenuItem onClick={handleClose2}>Home Interior 2</MenuItem>
                                <MenuItem onClick={handleClose2}>Home Interior 3</MenuItem>
                                <MenuItem onClick={handleClose2}>Home Interior 4</MenuItem>
                            </Menu> */}
                            </div>
                        </div>

                    </Grid>
                </Grid>
            {/* </AppBar> */}
            {/* <Drawer
                onClick={handleDrawerOpen}
                >
                <MenuItem>Menu Item</MenuItem>
                <MenuItem>Menu Item 2</MenuItem>
            </Drawer> */}
        </Grid>
    );
};

export default Header;