const initialValue = {
	fullName: "",
	displayName: "",
	workspaces: [{ workspaceName: "", workspaceURL: "" }],
	usageType: "",
};

const userDataReducer = (state, action) => {
	switch (action.type) {
		case "fullName":
			return { ...state, fullName: action.payload };

		case "displayName":
			return { ...state, displayName: action.payload };

		case "addWorkspace":
			return {
				...state,
				workspaces: [
					...state.workspaces,
					{
						workspaceName: action.payload.workspaceName,
						workspaceURL: action.payload.workspaceURL,
					},
				],
			};
		case "usageType":
			return { ...state, usageType: action.payload };

		default:
			return state;
	}
};

export { initialValue, userDataReducer };
