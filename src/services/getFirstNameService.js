const getFirstName = (name) => {
	let firstname = "";
	for (let x of name) {
		if (x === " ") {
			return firstname;
		}
		firstname += x;
	}
	return firstname;
};

export { getFirstName };
