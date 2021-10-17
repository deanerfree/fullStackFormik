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

			<Typography>First Name: {values.firstName}</Typography>
			<Typography>Last Name: {values.lastName}</Typography>
			<Typography>Email: {values.email}</Typography>
			<Typography>Age: {values.age}</Typography>
			<Typography>Company: {values.company}</Typography>
			<Typography>Address 1: {values.address1}</Typography>
			<Typography>Address 2: {values.address2}</Typography>
			<Typography>City: {values.city}</Typography>
			<Typography>Province: {values.province}</Typography>
			<Typography>Postal Code: {values.postalcode}</Typography>
		</CardContent>
	)
}
