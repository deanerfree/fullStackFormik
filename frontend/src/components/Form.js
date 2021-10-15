import "../App.css"
import { useState } from "react"
import { Card, CardContent, Button } from "@material-ui/core"
import { Form, Formik } from "formik"
import { validation } from "../Functions/validationSchema"
import initialFormField from "../model/initialFormModel"

import FormStep1 from "./FormStep1"
import FormStep2 from "./FormStep2"
import FormReview from "./FormReview"

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

	function formStepper(step) {
		switch (step) {
			case 0:
				return <FormStep1 />
			case 1:
				return <FormStep2 />
			case 2:
				return <FormReview />
			default:
				return <div>Not Found</div>
		}
	}
	return (
		<Card>
			<CardContent className='wrapper'>
				<Formik
					initialValues={{ ...initialFormField }}
					validationSchema={currentValidationSchema}
					onSubmit={() => {}}>
					<Form autoComplete='off' className='formWrapper'>
						{formStepper(activeStep)}
						<Button onClick={() => setActiveStep(activeStep - 1)}>Back</Button>
						<Button onClick={changeStep}>Next</Button>
					</Form>
				</Formik>
			</CardContent>
		</Card>
	)
}
