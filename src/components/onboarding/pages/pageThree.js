import { useUserData } from "context/userDataContext/userDataContext";
import { Images } from "assets";
import { showToast } from "components/toast/toast";

const PageThree = () => {
	const { state, dispatch } = useUserData();

	const submitHandler = () => {
		if (state.usageType) {
			dispatch({ type: "nextPage" });
		} else {
			showToast("error", "Please select one of the options");
		}
	};

	return (
		<div>
			<h2>How are you planning to use Eden?</h2>
			<p>
				<small>We'll streamline your setup experience accordingly.</small>
			</p>
			<div>
				<div
					onClick={() => dispatch({ type: "usageType", payload: "individual" })}
				>
					<img
						src={
							state.usageType === "individual"
								? Images.userColored
								: Images.user
						}
						alt="user"
					/>
					<p>For myself</p>
					<p>Write better. Think more clearly. Stay organized</p>
				</div>
				<div onClick={() => dispatch({ type: "usageType", payload: "team" })}>
					<img
						src={
							state.usageType === "team" ? Images.groupColored : Images.group
						}
						alt="team"
					/>
					<p>With my team</p>
					<p>Wikis, docs, tasks & projects, all in one place</p>
				</div>
			</div>
			<button onClick={() => submitHandler()}>Create Workspace</button>
		</div>
	);
};

export { PageThree };
