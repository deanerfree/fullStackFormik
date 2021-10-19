import React from "react"
import { CardContent, Typography, Box } from "@material-ui/core"
import { CircularProgress } from "@mui/material"

export default function FormSuccess({ props }) {
	const { data } = props
	console.log(data)
	return (
		<CardContent>
			{data ? (
				<Box>
					<Typography variant='h2' sx={{}}>
						Uh Oh! Something went wrong
					</Typography>
					<br />
					<Typography variant='h2' sx={{}}>
						{data.error}
					</Typography>
					<br />
					<Typography variant='h4'>{data.message}</Typography>
					<br />
					<Typography variant='body1'>Please try again</Typography>
					<br />
				</Box>
			) : (
				<Box>
					<CircularProgress />
				</Box>
			)}
		</CardContent>
	)
}
