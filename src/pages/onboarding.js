import { Images } from "assets";
import {
	OnboardingNavbar,
	OnboardingScreens,
} from "components/onboarding/index";
import { useDocumentTitle } from "hooks/useDocumentTitle";

const Onboarding = () => {
	useDocumentTitle("Welcome!");

	return (
		<div>
			<header>
				<img src={Images.logo} alt="logo" />
				<span>Eden</span>
			</header>
			<div>
				<OnboardingNavbar />
			</div>
			<div>
				<OnboardingScreens />
			</div>
		</div>
	);
};

export { Onboarding };
