import { useOnboardingPage } from "context/onboardingContext/onboardingPageContext";

const OnboardingNavbar = () => {
	const { currentPage } = useOnboardingPage();
	return (
		<nav className="onboarding-navbar">
			<div>
				<div className={`screen-number ${currentPage >= 1 && "active"}`}>
					<span>1</span>
				</div>
				<div
					className={`number-connector ${currentPage >= 1 && "active"}`}
				></div>
			</div>
			<div>
				<div
					className={`number-connector ${currentPage >= 2 && "active"}`}
				></div>
				<div className={`screen-number ${currentPage >= 2 && "active"}`}>
					<span>2</span>
				</div>
				<div
					className={`number-connector ${currentPage >= 2 && "active"}`}
				></div>
			</div>
			<div>
				<div
					className={`number-connector ${currentPage >= 3 && "active"}`}
				></div>
				<div className={`screen-number ${currentPage >= 3 && "active"}`}>
					<span>3</span>
				</div>
				<div
					className={`number-connector ${currentPage >= 3 && "active"}`}
				></div>
			</div>
			<div>
				<div
					className={`number-connector ${currentPage >= 4 && "active"}`}
				></div>
				<div className={`screen-number ${currentPage >= 4 && "active"}`}>
					<span>4</span>
				</div>
			</div>
		</nav>
	);
};

export { OnboardingNavbar };
