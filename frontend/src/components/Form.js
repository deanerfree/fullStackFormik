import "../App.css"
import { useState } from "react"
import { Card, CardContent, Button } from "@material-ui/core"
import { Form, Formik } from "formik"
import { validation } from "../Functions/validationSchema"
import initialFormField from "../model/initialFormModel"
import formStepper from "../Functions/formStepper"

export default function UserForm() {
	const [activeStep, setActiveStep] = useState(0)
	const currentValidationSchema = validation[activeStep]
	// const numVal = /[1-9][0-9]/
	console.log(currentValidationSchema)
	console.log(activeStep)

	const _stepBack = () => {
		if (activeStep === 0) return
		setActiveStep(activeStep - 1)
	}

	function _sleep(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms))
	}

	async function _submitForm(values, actions) {
		await _sleep(1000)
		alert(JSON.stringify(values, null, 2))
		actions.setSubmitting(false)
	}

	function _handleSubmit(values, actions) {
		if (activeStep === 2) {
			_submitForm(values, actions)
		} else {
			setActiveStep(activeStep + 1)
			actions.setTouched({})
			actions.setSubmitting(false)
		}
	}
	return (
		<Card>
			<CardContent className='wrapper'>
				<Formik
					initialValues={{ ...initialFormField }}
					validationSchema={currentValidationSchema}
					onSubmit={_handleSubmit}>
					{({ isSubmitting }) => (
						<Form autoComplete='off' className='formWrapper'>
							<div className='formBody'>{formStepper(activeStep)}</div>
							<div className='buttonWrapper'>
								{activeStep === 0 ? null : (
									<Button onClick={_stepBack}>Back</Button>
								)}
								{isSubmitting ? <p>Hello</p> : null}
								<Button
									disabled={isSubmitting}
									type='submit'
									variant='contained'
									color='primary'>
									{activeStep === 2 ? "Submit" : "Next"}
								</Button>
							</div>
						</Form>
					)}
				</Formik>
			</CardContent>
		</Card>
	)
}
