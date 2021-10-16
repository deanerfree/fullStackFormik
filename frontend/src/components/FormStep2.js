import { Typography } from "@material-ui/core"
import { Field } from "formik"
import { TextField } from "formik-material-ui"
export default function FormStep2() {
	return (
		<div>
			<Typography variant='h2'>Form</Typography>
			<div className='fieldItem'>
				<Field
					name='address1'
					label='Address 1'
					placeholder='Enter Address 1'
					component={TextField}
				/>
			</div>
			<div className='fieldItem'>
				<Field
					name='address2'
					label='Address 2'
					placeholder='Enter Address 2'
					component={TextField}
				/>
			</div>
			<div className='fieldItem'>
				<Field
					name='city'
					label='City'
					placeholder='Enter a City'
					component={TextField}
				/>
			</div>
			<div className='fieldItem'>
				<Field
					name='province'
					label='Province'
					placeholder='Enter a province'
					component={TextField}
				/>
			</div>
			<div className='fieldItem'>
				<Field
					name='postalcode'
					label='Postal Code'
					placeholder='Enter Postal Code'
					component={TextField}
				/>
			</div>
		</div>
	)
}
