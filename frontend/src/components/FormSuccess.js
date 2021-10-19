import React from "react"
import { CardContent, Typography, Box } from "@material-ui/core"
import { CircularProgress } from "@mui/material"

export default function FormSuccess({ props }) {
	const { ...responseData } = props

	const date = responseData.data.data[0].createDate
	const modDate = date.substring(0, 10)
	return (
		<CardContent>
			{responseData ? (
				<Box>
					<Typography variant='h2' sx={{}}>
						Congratulations!
					</Typography>
					<br />
					<Typography variant='h4'>
						{responseData.data.data[0].firstName}{" "}
						{responseData.data.data[0].lastName}
					</Typography>
					<br />
					<Typography variant='body1'>
						You have successfully signed up!
					</Typography>
					<br />
					<Typography variant='body1'>On {modDate}</Typography>
				</Box>
			) : (
				<Box>
					<CircularProgress />
				</Box>
			)}
		</CardContent>
	)
}
