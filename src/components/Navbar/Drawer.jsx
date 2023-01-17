import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export default function NavigationDrawer({state, toggleDrawer, menuItems}) {
	const list = () => (
		<Box
			sx={{width: 220}}
			role='presentation'
			onClick={toggleDrawer(!state)}
			onKeyDown={toggleDrawer(!state)}
		>
			<List>
				{menuItems.map((text) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<Drawer anchor='left' open={state} onClose={toggleDrawer(!state)}>
			{list("left")}
		</Drawer>
	);
}
