import { Mail, Notifications, Pets } from "@mui/icons-material";
import {
	AppBar,
	Avatar,
	Badge,
	Box,
	InputBase,
	Menu,
	MenuItem,
	styled,
	Toolbar,
	Typography,
} from "@mui/material";
import React, { useState } from "react";

const StyledToolBar = styled(Toolbar)({
	display: "flex",
	justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
	backgroundColor: "white",
	padding: " 0 10px",
	borderRadius: theme.shape.borderRadius,
	width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
	display: "none",
	gap: "20px",
	alignItems: "center",
  [theme.breakpoints.up('sm')]:{
    display: 'flex'
  }
}));

const UserBox = styled(Box)(({ theme }) => ({
	display: "flex",
	gap: "10px",
	alignItems: "center",
  [theme.breakpoints.up('sm')]:{
    display: 'none'
  }
}));

export const NavBar = () => {
  const [open, setOpen] = useState(false)
	return (
		<AppBar position="sticky">
			<StyledToolBar>
				<Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
					MY APP
				</Typography>
				<Pets sx={{ display: { xs: "block", sm: "none" } }} />
				<Search>
					<InputBase placeholder="search..." />
				</Search>
				<Icons>
					<Badge badgeContent={4} color="error">
						<Mail />
					</Badge>
					<Badge badgeContent={2} color="error">
						<Notifications />
					</Badge>
					<Avatar sx={{ width: 30, height: 30 }} src="/pp4.jpg" onClick={e=>setOpen(true)} />
				</Icons>
				<UserBox>
					<Avatar sx={{ width: 30, height: 30 }} src="/pp4.jpg" onClick={e=>setOpen(true)} />
          <Typography variant="span">John Doe</Typography>
				</UserBox>
			</StyledToolBar>
      <Menu
      id="demo-positioned-menu"
      aria-labelledby="demo-positioned-button"
      onClose={e=>setOpen(false)}
      open={open}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}>
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
		</AppBar>
	);
};
