import { useUserData } from "context/userDataContext/userDataContext";
import { Images } from "assets";
import { showToast } from "components/toast/toast";

const ScreenThree = () => {
	const { state, dispatch } = useUserData();

	const submitHandler = () => {
		if (state.usageType) {
			dispatch({ type: "nextPage" });
		} else {
			showToast("error", "Please select one of the options");
		}
	};

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				submitHandler();
			}}
		>
			<h2>How are you planning to use Eden?</h2>
			<small>We'll streamline your setup experience accordingly.</small>
			<div className="usage-options">
				<div
					className={`option ${state.usageType === "individual" && "active"}`}
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
					<h5>For myself</h5>
					<small>Write better. Think more clearly. Stay organized</small>
				</div>
				<div
					className={`option ${state.usageType === "team" && "active"}`}
					onClick={() => dispatch({ type: "usageType", payload: "team" })}
				>
					<img
						src={
							state.usageType === "team" ? Images.groupColored : Images.group
						}
						alt="team"
					/>
					<h5>With my team</h5>
					<small>Wikis, docs, tasks & projects, all in one place</small>
				</div>
			</div>
			<button>Create Workspace</button>
		</form>
	);
};

export { ScreenThree };
