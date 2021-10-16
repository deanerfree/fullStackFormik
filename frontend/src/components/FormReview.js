import { useFormikContext } from "formik"
import { CardContent, Typography } from "@material-ui/core"

export default function FormReview() {
	const { values } = useFormikContext()

	console.log(values)
	return (
		<CardContent>
			<Typography>Hello</Typography>
		</CardContent>
	)
}
