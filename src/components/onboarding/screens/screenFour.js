import { useUserData } from "context/userDataContext/userDataContext";

const ScreenFour = () => {
	const { state } = useUserData();
	return (
		<div className="last-screen">
			<div className="check">
				<span className="material-icons-outlined">check</span>
			</div>
			<h2>Congratulations, {state.names.fullName}!</h2>
			<small>
				You have completed the onboarding, you can start using Eden!
			</small>
			<a
				href="https://github.com/HeyNitin/Onboarding-UI"
				target="_blank"
				rel="noreferrer"
			>
				<button>Launch Eden</button>
			</a>
		</div>
	);
};
export { ScreenFour };
