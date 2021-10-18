import "../App.css"
import React, { useState } from "react"
import axios from "axios"
import { CircularProgress } from "@mui/material"
import { Card, CardContent, Button, Box } from "@material-ui/core"
import { Form, Formik } from "formik"
import { validation } from "../Functions/validationSchema"
import initialFormField from "../model/initialFormModel"
import formStepper from "../Functions/formStepper"
import FormResult from "./FormResult"

export default function UserForm() {
	const [activeStep, setActiveStep] = useState(0)
	const [responseData, setResponseData] = useState([])
	const currentValidationSchema = validation[activeStep]
	// const numVal = /[1-9][0-9]/

	const _stepBack = () => {
		if (activeStep === 0) return
		setActiveStep(activeStep - 1)
	}

	// function _sleep(ms) {
	// 	return new Promise((resolve) => setTimeout(resolve, ms))
	// }

	async function _submitForm(values, actions) {
		if (values.age === "") {
			values.age = 0
		}

		axios
			.post("/api/create", values)
			.then((resp) => {
				if (resp.status === 200) {
					setResponseData(resp)
					setActiveStep(activeStep + 1)
				}
			})
			.catch((err) => {
				console.log(err)
			})

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
				{activeStep === 3 ? (
					<FormResult props={{ responseData }} />
				) : (
					<Formik
						initialValues={{ ...initialFormField }}
						validationSchema={currentValidationSchema}
						onSubmit={_handleSubmit}>
						{({ isSubmitting }) => (
							<Form autoComplete='off' className='formWrapper'>
								<Box className='formBody'>{formStepper(activeStep)}</Box>
								<Box>
									{isSubmitting ? (
										<CircularProgress />
									) : (
										<div className='buttonWrapper'>
											{activeStep === 0 ? null : (
												<Button onClick={_stepBack}>Back</Button>
											)}
											{
												<Button
													disabled={isSubmitting}
													type='submit'
													variant='contained'
													color='primary'
													size='small'>
													{activeStep === 2 ? "Submit" : "Next"}
												</Button>
											}
										</div>
									)}
								</Box>
							</Form>
						)}
					</Formik>
				)}
			</CardContent>
		</Card>
	)
}
