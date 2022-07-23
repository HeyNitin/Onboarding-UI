import {
	ScreenFour,
	ScreenOne,
	ScreenThree,
	ScreenTwo,
} from "components/onboarding/screens/index";
import { useOnboardingPage } from "context/onboardingContext/onboardingPageContext";

const OnboardingScreens = () => {
	const { currentPage } = useOnboardingPage();

	return (
		<div className="onboarding-screens">
			{currentPage === 1 ? (
				<ScreenOne />
			) : currentPage === 2 ? (
				<ScreenTwo />
			) : currentPage === 3 ? (
				<ScreenThree />
			) : (
				currentPage === 4 && <ScreenFour />
			)}
		</div>
	);
};

export { OnboardingScreens };
