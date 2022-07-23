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
		<div className="onboarding-screens">
			{state.currentScreen === 1 ? (
				<ScreenOne />
			) : state.currentScreen === 2 ? (
				<ScreenTwo />
			) : state.currentScreen === 3 ? (
				<ScreenThree />
			) : (
				state.currentScreen === 4 && <ScreenFour />
			)}
		</div>
	);
};

export { OnboardingScreens };
