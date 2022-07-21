import { useUserData } from "context/userDataContext/userDataContext";

const OnboardingNavbar = () => {
	const { state } = useUserData();
	return (
		<nav className="onboarding-navbar">
			<div>
				<div
					className={`screen-number ${state.currentScreen >= 1 && "active"}`}
				>
					<span>1</span>
				</div>
				<div
					className={`number-connector ${state.currentScreen >= 1 && "active"}`}
				></div>
			</div>
			<div>
				<div
					className={`number-connector ${state.currentScreen >= 2 && "active"}`}
				></div>
				<div
					className={`screen-number ${state.currentScreen >= 2 && "active"}`}
				>
					<span>2</span>
				</div>
				<div
					className={`number-connector ${state.currentScreen >= 2 && "active"}`}
				></div>
			</div>
			<div>
				<div
					className={`number-connector ${state.currentScreen >= 3 && "active"}`}
				></div>
				<div
					className={`screen-number ${state.currentScreen >= 3 && "active"}`}
				>
					<span>3</span>
				</div>
				<div
					className={`number-connector ${state.currentScreen >= 3 && "active"}`}
				></div>
			</div>
			<div>
				<div
					className={`number-connector ${state.currentScreen >= 4 && "active"}`}
				></div>
				<div
					className={`screen-number ${state.currentScreen >= 4 && "active"}`}
				>
					<span>4</span>
				</div>
			</div>
		</nav>
	);
};

export { OnboardingNavbar };
