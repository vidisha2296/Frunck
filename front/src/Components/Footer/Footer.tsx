import { Box, Container, Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from 'react';
import { useStyles } from './Styles';

const Footer = () => {
    const classes=useStyles();
    return (
        <Grid item xs={12}>
            <Box
                sx={{
                    width: "100%",
                    height: "auto",
                    backgroundColor: "black",
                    paddingTop: "15px",
                    paddingBottom: "15px",
                    color:"white",
                }}
            >
                <Container maxWidth="lg">
                    <Grid  container item xs={12}  className={classes.root}>
                        <Grid item xs={2} style={{minWidth:"200px"}}>
                           <List>
                            <ListItem>
                                <ListItemText style={{fontWeight:"600"}}>
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
                        <Grid item xs={2} style={{minWidth:"200px"}}>
                        <List>
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
                        <Grid item xs={3} style={{minWidth:"200px"}}>
                        <List>
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
                        <Grid item xs={2} style={{minWidth:"200px"}}>
                        <List>
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
                        <Grid item xs={2} style={{minWidth:"200px"}}>
                        <List>
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
                    </Grid>
                </Container>
            </Box>
        </Grid>
    );
};

export default Footer;