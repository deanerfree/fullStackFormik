import React from "react"
import { useFormikContext } from "formik"
import { CardContent, Typography, Box } from "@material-ui/core"
import { Divider } from "@mui/material"
import { keyNameCorrector } from "../Functions/keyNameCorrector"

export default function FormReview() {
	const { values } = useFormikContext()
	const array = Object.entries(values)

	return (
		<CardContent>
			<Box sx={{ display: "flex" }}>
				<Typography variant='h2' style={{ fontSize: "30px" }}>
					Review Details
				</Typography>
			</Box>
			<Box sx={{ margin: "20px" }}>
				{array.map((item, index) => {
					if (item[0] === "createDate" || item[0] === "dateUpdated") {
						return
					}
					return (
						<div key={index}>
							<Typography
								variant='body1'
								style={{ fontSize: "15px", margin: "10px" }}>
								{keyNameCorrector(item[0])}: {item[1]}
							</Typography>
							<Divider />
						</div>
					)
				})}
			</Box>
		</CardContent>
	)
}
