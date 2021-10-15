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

	const changeStep = () => {
		if (activeStep > 2) {
			setActiveStep(0)
		}
		setActiveStep(activeStep + 1)
	}

	return (
		<Card>
			<CardContent className='wrapper'>
				<Formik
					initialValues={{ ...initialFormField }}
					validationSchema={currentValidationSchema}
					onSubmit={() => {}}>
					<Form autoComplete='off' className='formWrapper'>
						<div className='formBody'>{formStepper(activeStep)}</div>
						<div className='buttonWrapper'>
							<Button onClick={() => setActiveStep(activeStep - 1)}>
								Back
							</Button>
							<Button onClick={changeStep}>Next</Button>
						</div>
					</Form>
				</Formik>
			</CardContent>
		</Card>
	)
}
