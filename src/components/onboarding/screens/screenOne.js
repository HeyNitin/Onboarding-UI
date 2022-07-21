import { showToast } from "components/toast/toast";
import { useUserData } from "context/userDataContext/userDataContext";

const ScreenOne = () => {
	const { state, dispatch } = useUserData();

	const submitHandler = () => {
		if (state.names.fullName.trim() && state.names.displayName.trim()) {
			dispatch({ type: "nextPage" });
		} else {
			showToast("error", "Enter both fields");
		}
	};

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				submitHandler();
			}}
		>
			<h2>Welcome! First things first...</h2>
			<p>
				<small>You can always change them later.</small>
			</p>
			<div>
				<label htmlFor="fullName">Full Name</label>
				<div>
					<input
						onChange={(e) =>
							dispatch({ type: "fullName", payload: e.target.value })
						}
						value={state.names.fullName}
						id="fullName"
						placeholder="Steve Jobs"
					/>
				</div>
			</div>
			<div>
				<label htmlFor="displayName">Display Name</label>
				<div>
					<input
						onChange={(e) =>
							dispatch({ type: "displayName", payload: e.target.value })
						}
						value={state.names.displayName}
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
