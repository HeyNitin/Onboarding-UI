import { Images } from "assets";
import { useUserData } from "context/userDataContext/userDataContext";

const PageFour = () => {
	const { state } = useUserData();
	return (
		<div>
			<img src={Images.checkColored} alt="check" />
			<h2>Congratulations, {state.names.fullName}!</h2>
			<p>
				<small>
					You have completed the onboarding, you can start using Eden!
				</small>
			</p>
			<button>Launch Eden</button>
		</div>
	);
};
export { PageFour };
