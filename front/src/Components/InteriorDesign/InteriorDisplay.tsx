import { Grid, Box, Menu, MenuItem, Modal, Typography } from '@mui/material';
import React from 'react';
import { useStyles } from './Styles';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import furniture1 from "../../Assets/Images/furniture1.jpeg";
import furniture2 from "../../Assets/Images/furniture2.jpeg";
import furniture3 from "../../Assets/Images/furniture3.jpeg";
import furniture4 from "../../Assets/Images/furniture4.jpeg";
import furniture5 from "../../Assets/Images/furniture5.jpeg";
import furniture6 from "../../Assets/Images/furniture6.jpeg";
import home from "../../Assets/Images/homemodal.jpg";




const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '95%',
    bgcolor: '#FFD300',
    backgroundImage: "linear-gradient(to left, #ffffb3 , yellow)",
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const InteriorDisplay = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const products = [
        {
            title: "Futuristic living room",
            icon: <KeyboardDoubleArrowRightIcon />,
            image: furniture1,
        },
        {
            title: "Elegant Kitchen Designs",
            icon: <KeyboardDoubleArrowRightIcon />,
            image: furniture2,
        },
        {
            title: "Luxurious Bedroom Interiors",
            icon: <KeyboardDoubleArrowRightIcon />,
            image: furniture3,
        },
        {
            title: "Kids Bedroom Design",
            icon: <KeyboardDoubleArrowRightIcon />,
            image: furniture4,
        },
        {
            title: "Space Saving Designs",
            icon: <KeyboardDoubleArrowRightIcon />,
            image: furniture5,
        },
        {
            title: "Bathroom Designs",
            icon: <KeyboardDoubleArrowRightIcon />,
            image: furniture6,
        },
    ];
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleMouseOver = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    // const handleClose = () => {
    //     setAnchorEl(null);
    // };
    return (
        <Grid container spacing={2} item xs={12} style={{ paddingTop: "10px" }}>
            <Grid className={classes.DesignContainer}>
                {
                    products.map((product) => (
                        <Grid className={classes.cart}>
                            <div className={classes.TextCart}>
                                <div>{product.title}</div>
                                <div style={{ paddingLeft: "15px" }} onMouseOver={handleMouseOver}>{product.icon}</div>
                                {/* <Menu
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
                            </Menu> */}
                            </div>
                            <div>
                                <img src={product.image} alt="" className={classes.productImg} />
                            </div>
                        </Grid>
                    ))
                }
            </Grid>
            <Grid style={{ width: "100%", height: "60px", marginTop:"30px" }}>
                <Box className={classes.explore} onClick={handleOpen}>
                    <div style={{ margin: "auto" }}>
                        Explore 100’s of possibilities! schedule a call back
                    </div>
                    <div style={{ paddingLeft: "25px" }} >
                        <KeyboardDoubleArrowRightIcon />
                    </div>
                </Box>
            </Grid>
            <Grid>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Grid container  item xs={12} >
                            <Grid item xs={5}>
                                <img src={home} alt="" className={classes.modalImg} />
                                <div style={{marginTop:"30px"}}>
                                    <div style={{border:"1px solid black", height:"80px", width:"200px", margin:"auto"}}>
                                        <h1 style={{fontWeight:"600", textAlign:"center"}}>15% OFF</h1>
                                        <div style={{backgroundColor:"gray", color:"White", padding:"3px", }}>On Home Interior</div>
                                    </div>

                                </div>
                            </Grid>
                            <Grid item xs={7}>
                                <Typography id="modal-modal-title" variant="h6" component="h2" style={{fontSize:"30px"}}>
                                Get A Free Consultation
                                </Typography>
                                {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                </Typography> */}
                                <Grid>
                                    <p style={{fontSize:"20px"}}>
                                    Tell us about your home
                                    </p>
                                    <div className={classes.btnContainer}>
                                        <div className={classes.mButton}>1 BHK</div>
                                        <div className={classes.mButton}>2 BHK</div>
                                        <div className={classes.mButton}>3 BHK</div>
                                        <div className={classes.mButton}>4 +BHK/Duplex</div>
                                        <div className={classes.mButton}>Independent Home / Villa</div>
                                    </div>
                                </Grid>
                                <Grid>
                                    <p style={{fontSize:"20px", marginTop:"20px"}}>
                                    Which city is this home in?
                                    </p>
                                    <div className={classes.secBtnContain}>
                                        <div className={classes.mButton}>Bangalore</div>
                                        <div className={classes.mButton}>Hyderabad</div>
                                        <div className={classes.mButton}>Chennai</div>
                                        <div className={classes.mButton}>Mumbai</div>
                                        <div className={classes.mButton}>Navi Mumbai</div>
                                        <div className={classes.mButton}>Thane</div>
                                        <div className={classes.mButton}>Mysore</div>
                                        <div className={classes.mButton}>Pune</div>
                                        <div className={classes.mButton}>Coimbatore</div>
                                        <div className={classes.mButton}>Vizag</div>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                        {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                            Text in a modal
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography> */}
                    </Box>
                </Modal>
            </Grid>

        </Grid>
    );
};

export default InteriorDisplay;