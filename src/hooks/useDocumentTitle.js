import { useEffect } from "react";

const useDocumentTitle = (title) => {
	useEffect(() => {
		document.title = `Eden || ${title}`;
	}, [title]);
};

export { useDocumentTitle };
