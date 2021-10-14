import "../App.css"
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
							className='fieldItem'
							name='firstName'
							label='First Name'
							placeholder='Enter First Name'
							component={TextField}
						/>
						<Field
							className='fieldItem'
							name='lastName'
							label='Last Name'
							placeholder='Enter Last Name'
							component={TextField}
						/>
						<Field
							className='fieldItem'
							name='email'
							label='Email'
							placeholder='Enter Email'
							component={TextField}
						/>
						<Field
							className='fieldItem'
							name='age'
							label='Age'
							placeholder='Enter Age'
							component={TextField}
						/>
						<Field
							className='fieldItem'
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
