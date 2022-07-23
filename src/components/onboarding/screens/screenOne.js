import { showToast } from "components/toast/toast";
import { useOnboardingPage } from "context/onboardingContext/onboardingPageContext";
import { useUserData } from "context/userDataContext/userDataContext";
import { nameValidator } from "services/validatorServices";

const ScreenOne = () => {
	const { state, dispatch } = useUserData();
	const { setCurrentPage } = useOnboardingPage();

	const submitHandler = () => {
		if (state.fullName.trim() && state.displayName.trim()) {
			if (nameValidator(state.fullName.trim())) {
				setCurrentPage((prev) => prev + 1);
			} else {
				console.log(state.fullName.trim());
				showToast(
					"error",
					"That's not a valid full name. It should contain both first and last name and both should be of atleast 3 characters"
				);
			}
		} else {
			showToast("error", "Enter all fields");
		}
	};

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				submitHandler();
			}}
			className="form"
		>
			<h2>Welcome! First things first...</h2>
			<small>You can always change them later.</small>
			<div>
				<label htmlFor="fullName">Full Name</label>
				<div className="input-box">
					<input
						onChange={(e) =>
							dispatch({ type: "fullName", payload: e.target.value })
						}
						value={state.fullName}
						id="fullName"
						placeholder="Steve Jobs"
					/>
				</div>
			</div>
			<div>
				<label htmlFor="displayName">Display Name</label>
				<div className="input-box">
					<input
						onChange={(e) =>
							dispatch({ type: "displayName", payload: e.target.value })
						}
						value={state.displayName}
						id="displayName"
						placeholder="Steve"
					/>
				</div>
			</div>
			<button>Create Workspace</button>
		</form>
	);
};

export { ScreenOne };
