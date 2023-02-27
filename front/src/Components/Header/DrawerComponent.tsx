import React, { useState } from "react";
import {
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemText,
	makeStyles,
	MenuItem,
	Menu
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { useStyles } from './Styles';

// const useStyles = makeStyles(() => ({
// 	link: {
// 		textDecoration: "none",
// 		color: "blue",
// 		fontSize: "20px",
// 	},
// 	icon: {
// 		color: "white"
// 	}
// }));

function DrawerComponent() {
	const classes = useStyles();
	const [openDrawer, setOpenDrawer] = useState(false);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const handleMouseOver = (event: any) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<>
			<Drawer
				open={openDrawer}
				onClose={() => setOpenDrawer(false)}
			>
				<List>
					<ListItem onClick={() => setOpenDrawer(false)}>
						<ListItemText>
							<Link to="/">Home</Link>
						</ListItemText>
					</ListItem>
					<ListItem onClick={() => setOpenDrawer(false)}>
						<ListItemText>
							<p onMouseOver={handleMouseOver}>
								Design Ideas
							</p>
						</ListItemText>
					</ListItem>
					<Menu
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
					<ListItem onClick={() => setOpenDrawer(false)}>
						<ListItemText>
						Home Interior
						</ListItemText>
					</ListItem>
					<ListItem onClick={() => setOpenDrawer(false)}>
						<ListItemText>
						Sofa & Furniture
						</ListItemText>
					</ListItem>
					<ListItem onClick={() => setOpenDrawer(false)}>
						<ListItemText>
						Custom Furniture
						</ListItemText>
					</ListItem>
					<ListItem onClick={() => setOpenDrawer(false)}>
						<ListItemText>
						Home Renovate
						</ListItemText>
					</ListItem>
				</List>
			</Drawer>
			<div style={{ display: "flex" }}>
				<Link to="/signUp" style={{ textDecoration: "none", color: "gray", fontSize: "12px", marginTop: "7px" }}><p>Login/Register</p></Link>
				<IconButton onClick={() => setOpenDrawer(!openDrawer)}>
					<MenuIcon />
				</IconButton>
			</div>

		</>
	);
}
export default DrawerComponent;