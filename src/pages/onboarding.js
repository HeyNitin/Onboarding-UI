import { Images } from "assets";
import { OnboardingPages, OnboardingNavbar } from "components/onboarding/index";
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
				<OnboardingPages />
			</div>
		</div>
	);
};

export { Onboarding };
