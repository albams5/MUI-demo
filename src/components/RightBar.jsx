import {
	Avatar,
	AvatarGroup,
	Box,
	Divider,
	ImageList,
	ImageListItem,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Typography,
} from "@mui/material";
import React from "react";

export const RightBar = () => {
	return (
		<Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
			<Box position="fixed" width={300}>
				<Typography variant="h6" fontWeight={100}>
					Online Friends
				</Typography>
				<AvatarGroup max={4}>
					<Avatar alt="Remy Sharp" src="/pp1.jpg" />
					<Avatar alt="Travis Howard" src="/pp2.jpg" />
					<Avatar alt="Cindy Baker" src="/pp3.jpg" />
					<Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
					<Avatar alt="Trevor Henderson" src="/pp45.jpg" />
				</AvatarGroup>
				<Typography variant="h6" fontWeight={100} mt={2} mb={2}>
					Latest Photos
				</Typography>
				<ImageList cols={3} gap={5} sx={{ width: "100%" }}>
					{["/photo1.jpg", "/photo2.jpg", "/photo3.jpeg"].map((src) => (
						<ImageListItem
							key={src}
							sx={{
								position: "relative",
								width: "100%",
								paddingBottom: "100%", // Esto asegura la proporción 1:1 para hacer un cuadrado
							}}
						>
							<img
								src={src}
								alt="background"
								style={{
									position: "absolute",
									top: 0,
									left: 0,
									width: "100%",
									height: "100%",
									objectFit: "cover",
									objectPosition: "center",
								}}
							/>
						</ImageListItem>
					))}
				</ImageList>
				<Typography variant="h6" fontWeight={100} mt={2}>
					Latest Conversations
				</Typography>
				<List
					sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
				>
					<ListItem alignItems="flex-start">
						<ListItemAvatar>
							<Avatar alt="Remy Sharp" src="/pp2.jpg" />
						</ListItemAvatar>
						<ListItemText
							primary="Brunch this weekend?"
							secondary={
								<React.Fragment>
									<Typography
										component="span"
										variant="body2"
										sx={{ color: "text.primary", display: "inline" }}
									>
										Ali Connors
									</Typography>
									{" — I'll be in your neighborhood doing errands this…"}
								</React.Fragment>
							}
						/>
					</ListItem>
					<Divider variant="inset" component="li" />
					<ListItem alignItems="flex-start">
						<ListItemAvatar>
							<Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
						</ListItemAvatar>
						<ListItemText
							primary="Summer BBQ"
							secondary={
								<React.Fragment>
									<Typography
										component="span"
										variant="body2"
										sx={{ color: "text.primary", display: "inline" }}
									>
										to Scott, Alex, Jennifer
									</Typography>
									{" — Wish I could come, but I'm out of town this…"}
								</React.Fragment>
							}
						/>
					</ListItem>
					<Divider variant="inset" component="li" />
					<ListItem alignItems="flex-start">
						<ListItemAvatar>
							<Avatar alt="Cindy Baker" src="/pp3.jpg" />
						</ListItemAvatar>
						<ListItemText
							primary="Oui Oui"
							secondary={
								<React.Fragment>
									<Typography
										component="span"
										variant="body2"
										sx={{ color: "text.primary", display: "inline" }}
									>
										Sandra Adams
									</Typography>
									{" — Do you have Paris recommendations? Have you ever…"}
								</React.Fragment>
							}
						/>
					</ListItem>
				</List>
			</Box>
		</Box>
	);
};
