import { useUserData } from "context/userDataContext/userDataContext";
import {
	ScreenFour,
	ScreenOne,
	ScreenThree,
	ScreenTwo,
} from "components/onboarding/screens/index";

const OnboardingScreens = () => {
	const { state } = useUserData();

	return (
		<div>
			{state.currentPage === 1 ? (
				<ScreenOne />
			) : state.currentPage === 2 ? (
				<ScreenTwo />
			) : state.currentPage === 3 ? (
				<ScreenThree />
			) : (
				state.currentPage === 4 && <ScreenFour />
			)}
		</div>
	);
};

export { OnboardingScreens };
