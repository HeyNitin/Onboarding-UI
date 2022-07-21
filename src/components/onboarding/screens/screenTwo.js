import { showToast } from "components/toast/toast";
import { useUserData } from "context/userDataContext/userDataContext";

const ScreenTwo = () => {
	const { state, dispatch } = useUserData();

	const submitHandler = () => {
		if (state.names.workspaceName.trim() && state.workspaceURL.trim()) {
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
			<h2>Let's set up a home for all your work</h2>
			<p>
				<small>You can always create another workspace later.</small>
			</p>
			<div>
				<label htmlFor="workspaceName">Workspace Name</label>
				<div>
					<input
						onChange={(e) =>
							dispatch({ type: "workspaceName", payload: e.target.value })
						}
						value={state.names.workspaceName}
						id="workspaceName"
						placeholder="Eden"
					/>
				</div>
			</div>
			<div>
				<label htmlFor="workspaceURL">Workspace URL (optional)</label>
				<div>
					<span>www.eden.com/</span>
					<input
						onChange={(e) =>
							dispatch({ type: "workspaceURL", payload: e.target.value })
						}
						value={state.workspaceURL}
						id="workspaceURL"
						placeholder="Example"
					/>
				</div>
			</div>
			<button>Create Workspace</button>
		</form>
	);
};

export { ScreenTwo };
