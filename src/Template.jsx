import { Container, Box } from "@mui/material";
import Header from "./Header";
import { Outlet } from "react-router-dom";
export default function Template({ list, clear }) {
	return (
		<Box>
			<Header
				count={list.filter(item => !item.done).length}
				clear={clear}
			/>
			<Container maxWidth="sm">
				<Outlet />
			</Container>
		</Box>
	);
}
