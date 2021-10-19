import "../App.css"
import React, { useState } from "react"
import axios from "axios"
import { CircularProgress } from "@mui/material"
import {
	Card,
	CardContent,
	Button,
	Box,
	ThemeProvider,
	makeStyles,
} from "@material-ui/core"

import { theme, root } from "../styles/theme"
import { Form, Formik } from "formik"
import { validation } from "../Functions/validationSchema"
import initialFormField from "../model/initialFormModel"
import formStepper from "../Functions/formStepper"
import FormResult from "./FormResult"
const useStyles = makeStyles(root)
export default function UserForm() {
	const [activeStep, setActiveStep] = useState(0)
	const [responseData, setResponseData] = useState([])
	const currentValidationSchema = validation[activeStep]
	// const numVal = /[1-9][0-9]/
	const classes = useStyles()
	const _stepBack = () => {
		if (activeStep === 0) return
		setActiveStep(activeStep - 1)
	}

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
			<ThemeProvider theme={theme}>
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
													<Button className={classes.root} onClick={_stepBack}>
														Back
													</Button>
												)}
												{
													<Button
														disabled={isSubmitting}
														type='submit'
														variant='contained'
														color='primary'
														style={{ height: 48, width: 100 }}>
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
			</ThemeProvider>
		</Card>
	)
}
