import { useFormikContext } from "formik"
import { CardContent, Typography } from "@material-ui/core"

export default function FormReview() {
	const { values } = useFormikContext()

	// console.log(values)
	return (
		<CardContent>
			<Typography variant='h2' style={{ fontSize: "30px" }}>
				Review Details
			</Typography>

			<Typography variant='body1' style={{ fontSize: "15px" }}>
				First Name: {values.firstName}
			</Typography>
			<Typography variant='body1' style={{ fontSize: "15px" }}>
				Last Name: {values.lastName}
			</Typography>
			<Typography variant='body1' style={{ fontSize: "15px" }}>
				Email: {values.email}
			</Typography>
			<Typography variant='body1' style={{ fontSize: "15px" }}>
				Age: {values.age}
			</Typography>
			<Typography variant='body1' style={{ fontSize: "15px" }}>
				Company: {values.company}
			</Typography>
			<Typography variant='body1' style={{ fontSize: "15px" }}>
				Address 1: {values.address1}
			</Typography>
			<Typography variant='body1' style={{ fontSize: "15px" }}>
				Address 2: {values.address2}
			</Typography>
			<Typography variant='body1' style={{ fontSize: "15px" }}>
				City: {values.city}
			</Typography>
			<Typography variant='body1' style={{ fontSize: "15px" }}>
				Province: {values.province}
			</Typography>
			<Typography variant='body1' style={{ fontSize: "15px" }}>
				Postal Code: {values.postalcode}
			</Typography>
		</CardContent>
	)
}
