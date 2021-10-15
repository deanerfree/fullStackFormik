import FormStep1 from "../components/FormStep1"
import FormStep2 from "../components/FormStep2"
import FormReview from "../components/FormReview"

export default function formStepper(step) {
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
