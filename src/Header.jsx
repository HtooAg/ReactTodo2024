import { AppBar, Toolbar, IconButton, Typography, Badge } from "@mui/material";
import {
	Menu as MenuIcon,
	DeleteSweep as ClearallIcon
} from "@mui/icons-material";

export default function Header({ count, clear }) {
	return (
		<>
			<AppBar position="static">
				<Toolbar>
					<IconButton color="inherit">
						<Badge badgeContent={count} color="error">
							<MenuIcon />
						</Badge>
					</IconButton>
					<Typography variant="h6" sx={{ flexGrow: 1, ml: 3 }}>
						Checklist
					</Typography>
					<IconButton color="inherit" onClick={clear}>
						<ClearallIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
		</>
	);
}
