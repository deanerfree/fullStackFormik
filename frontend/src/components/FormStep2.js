import { Typography } from "@material-ui/core"
import { Field } from "formik"
import { TextField } from "formik-material-ui"
export default function FormStep2() {
	return (
		<div>
			<Typography variant='h2'>Form</Typography>
			<Field
				className='fieldItem'
				name='address1'
				label='Address 1'
				placeholder='Enter Address 1'
				component={TextField}
			/>
			<Field
				className='fieldItem'
				name='address2'
				label='Address 2'
				placeholder='Enter Address 2'
				component={TextField}
			/>
			<Field
				className='fieldItem'
				name='city'
				label='City'
				placeholder='Enter a City'
				component={TextField}
			/>
			<Field
				className='fieldItem'
				name='province'
				label='Province'
				placeholder='Enter a province'
				component={TextField}
			/>
			<Field
				className='fieldItem'
				name='postalcode'
				label='Postal Code'
				placeholder='Enter Postal Code'
				component={TextField}
			/>
		</div>
	)
}
