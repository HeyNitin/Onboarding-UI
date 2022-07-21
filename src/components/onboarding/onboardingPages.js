import { useUserData } from "context/userDataContext/userDataContext";
import {
	PageFour,
	PageOne,
	PageThree,
	PageTwo,
} from "components/onboarding/pages/index";

const OnboardingPages = () => {
	const { state } = useUserData();

	return (
		<div>
			{state.currentPage === 1 ? (
				<PageOne />
			) : state.currentPage === 2 ? (
				<PageTwo />
			) : state.currentPage === 3 ? (
				<PageThree />
			) : (
				state.currentPage === 4 && <PageFour />
			)}
		</div>
	);
};

export { OnboardingPages };
