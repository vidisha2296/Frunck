import { Box, Container, Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from 'react';
import { useStyles } from './Styles';
import social from "../../Assets/Images/social.png";

const Footer = () => {
    const classes = useStyles();
    return (
        <Grid container item xs={12}>
            <Box
                sx={{
                    width: "100%",
                    height: "auto",
                    backgroundColor: "black",
                    paddingTop: "15px",
                    paddingBottom: "15px",
                    color: "white",
                }}
            >
               
                    <Grid container item xs={12} className={classes.root}>
                        <Grid item xs={2} style={{ minWidth: "100px" }}>
                            <List>
                                <ListItem>
                                    <ListItemText style={{ fontWeight: "600" }}>
                                        Corporate
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        About Furnko
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        Careers
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        Partner/sell with us
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        Design for us
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        Business Query
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        Press
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        Privacy policy
                                    </ListItemText>
                                </ListItem>

                            </List>
                        </Grid>
                        <Grid item xs={2} style={{ minWidth: "100px" }}>
                            <List>
                                <ListItem>Useful links</ListItem>
                                <ListItem>
                                    <ListItemText>
                                        About Furnko
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        Careers
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        Partner/sell with us
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        Design for us
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        Business Query
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        Press
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        Privacy policy
                                    </ListItemText>
                                </ListItem>

                            </List>
                        </Grid>
                        <Grid item xs={2} style={{ minWidth: "100px" }}>
                            <List>
                                <ListItem>Customer Support</ListItem>
                                <ListItem>Contact/Help</ListItem>
                                <ListItem>Returns & Refunds
                                </ListItem>
                                <ListItem>
                                    Warranty
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={4} style={{maxWidth: "280px" }}>
                            <List>
                                <ListItem>Social</ListItem>
                                <ListItem className={classes.socialImg}>
                                    <a href="https://www.instagram.com/?hl=en" className={classes.Whatsapp}><i className="fab fa-whatsapp"></i>  </a>
                                    <a href="https://www.instagram.com/?hl=en" className={classes.Instagram}><i className="fab fa-instagram"></i>  </a>
                                    <a href="https://www.facebook.com/" className={classes.Facebook}><i className="fab fa-facebook-f"> </i> </a>
                                    
                                </ListItem>
                                <ListItem className={classes.socialImg}>
                                <a href="https://aboutme.google.com/u/0/?referer=gplus" className={classes.Google}><i className="fab fa-google-plus-g"> </i>  </a>
                                    <a href="https://www.youtube.com/" className={classes.Youtube}><i className="fab fa-youtube"></i> </a>
                                    <a href="https://twitter.com/login" className={classes.Twitter}><i className="fab fa-twitter"> </i> </a>
                                </ListItem>
                               
                            </List>
                        </Grid>
                        <Grid item xs={2} style={{ minWidth: "100px" }}>
                            <List>
                                <ListItem>Address</ListItem>
                                <ListItem>
                                    <ListItemText>
                                        Call:9000080000
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        Email:cs@furnko.in
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        10:00 AM to 08:00 PM
                                    </ListItemText>
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
              
            </Box>
        </Grid>
    );
};

export default Footer;