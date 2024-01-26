import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import AppRouter from "./AppRouter";

export default function Theme() {
	const theme = createTheme({
		palette: {
			mode: "dark"
		}
	});
	return (
		<ThemeProvider theme={theme}>
			<AppRouter />
			<CssBaseline />
		</ThemeProvider>
	);
}
