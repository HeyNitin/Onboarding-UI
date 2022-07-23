import { showToast } from "components/toast/toast";
import { useOnboardingPage } from "context/onboardingContext/onboardingPageContext";
import { useUserData } from "context/userDataContext/userDataContext";
import { useState } from "react";
import { websiteValidator } from "services/validatorServices";

const ScreenTwo = () => {
	const [workspace, setWorkspace] = useState({
		workspaceName: "",
		workspaceURL: "",
	});
	const { dispatch } = useUserData();
	const { setCurrentPage } = useOnboardingPage();

	const submitHandler = () => {
		if (workspace.workspaceName.trim()) {
			if (workspace.workspaceURL) {
				if (websiteValidator(workspace.workspaceURL)) {
					dispatch({ type: "addWorkspace", payload: workspace });
					setCurrentPage((prev) => prev + 1);
				} else {
					showToast("error", "That's not a valid website");
				}
			} else {
				dispatch({ type: "addWorkspace", payload: workspace });
				setCurrentPage((prev) => prev + 1);
			}
		} else {
			showToast("error", "Enter workspace name");
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
			<small>You can always create another workspace later.</small>
			<div>
				<label htmlFor="workspaceName">Workspace Name</label>
				<div className="input-box">
					<input
						onChange={(e) =>
							setWorkspace((prev) => {
								return { ...prev, workspaceName: e.target.value };
							})
						}
						value={workspace.workspaceName}
						id="workspaceName"
						placeholder="Eden"
					/>
				</div>
			</div>
			<div>
				<label htmlFor="workspaceURL">Workspace URL (optional)</label>
				<div className="input-box">
					<span>www.eden.com/</span>
					<input
						onChange={(e) =>
							setWorkspace((prev) => {
								return { ...prev, workspaceURL: e.target.value.trim() };
							})
						}
						value={workspace.workspaceURL}
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
