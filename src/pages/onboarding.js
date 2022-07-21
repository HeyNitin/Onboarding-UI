import { Images } from "assets";
import {
	OnboardingNavbar,
	OnboardingScreens,
} from "components/onboarding/index";
import { useDocumentTitle } from "hooks/useDocumentTitle";
import "styles/onboarding/onboarding.css";

const Onboarding = () => {
	useDocumentTitle("Welcome!");

	return (
		<div className="onboarding-component">
			<header className="onboarding-header">
				<img className="logo" src={Images.logo} alt="logo" />
				<h3>Eden</h3>
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
