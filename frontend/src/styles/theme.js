import { createTheme } from "@material-ui/core/styles"

export const theme = createTheme()

theme.typography.h2 = {
	fontSize: "1.2rem",
	fontFamily: ["Roboto", "Helvetica", "Arial"].join(","),
	fontWeight: 300,

	"@media (max-width:800px)": {
		fontSize: "40px",
		fontWeight: 300,
	},
	[theme.breakpoints.up("md")]: {
		fontSize: "70px",
		fontWeight: 300,
	},
}

export const root = {
	root: {
		background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
		border: 0,
		borderRadius: 3,
		boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
		color: "white",
		height: 48,
		padding: "0 30px",
	},
}
