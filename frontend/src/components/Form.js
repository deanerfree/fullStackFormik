import "../App"
import { Card, CardContent, Typography } from "@material-ui/core"
import { Field, Form, Formik } from "formik"
import { TextField } from "formik-material-ui"

export default function UserForm() {
	const initialValues = {
		firstName: "",
		lastName: "",
		email: "",
		age: "",
		company: "",
	}
	return (
		<Card>
			<CardContent className='wrapper'>
				<Formik initialValues={initialValues} onSubmit={() => {}}>
					<Form autoComplete='disabled' className='formWrapper'>
						<Field
							name='firstName'
							label='First Name'
							placeholder='Enter First Name'
							component={TextField}
						/>
						<Field
							name='lastName'
							label='Last Name'
							placeholder='Enter Last Name'
							component={TextField}
						/>
						<Field
							name='email'
							label='Email'
							placeholder='Enter Email'
							component={TextField}
						/>
						<Field
							name='age'
							label='Age'
							placeholder='Enter Age'
							component={TextField}
						/>
						<Field
							name='company'
							label='Company'
							placeholder='Enter Company'
							component={TextField}
						/>
					</Form>
				</Formik>
			</CardContent>
		</Card>
	)
}
