import React from "react";
import ReactDOM from "react-dom/client";
import "styles/index.css";
import App from "App";
import reportWebVitals from "reportWebVitals";
import { UserDataProvider } from "context/userDataContext/userDataContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<UserDataProvider>
			<App />
		</UserDataProvider>
	</React.StrictMode>
);

reportWebVitals();
