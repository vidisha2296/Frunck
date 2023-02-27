import React from "react";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
    useTheme,
    useMediaQuery,
    MenuItem,
    Menu,
    Grid,
    Box
} from "@mui/material";
import { Link } from "react-router-dom";
import DrawerComponent from "./DrawerComponent";
import { useStyles } from './Styles';


// const useStyles = makeStyles((theme) => ({
//   navlinks: {
//     marginLeft: theme.spacing(5),
//     display: "flex",
//   },
//   logo: {
//     flexGrow: "1",
//     cursor: "pointer",
//   },
//   link: {
//     textDecoration: "none",
//     color: "white",
//     fontSize: "20px",
//     marginLeft: theme.spacing(20),
//     "&:hover": {
//       color: "yellow",
//       borderBottom: "1px solid white",
//     },
//   },
// }));

function Navbar() {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleMouseOver = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" style={{ backgroundColor: "white", color: "gray" }}>
            <CssBaseline />
            <Toolbar>
                <Typography className={classes.logo}>
                    FURNKA

                </Typography>
                {isMobile ? (
                    <DrawerComponent />
                ) : (
                    <Grid item xs={11} >
                        <Box className={classes.upDiv}>
                            <Grid className={classes.signPart}>
                                <p>Partner with us</p>
                                <Link to="/signUp" style={{textDecoration:"none", color:"gray", fontSize:"10px"}}><p>Login/Register</p></Link>
                            </Grid>
                        </Box>
                        <div className={classes.headLast}>
                            <div className={classes.menuPart}>
                                <Link to="/" style={{ textDecoration: "none", color: "gray" }}>
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
                                <p >
                                    Home Interior
                                </p>
                                <p >
                                    Sofa & Furniture

                                </p>
                                <p >
                                    Custom Furniture
                                </p>
                                <p >
                                    Home Renovate
                                </p>

                            </div>
                        </div>
                    </Grid>
                )}
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;
