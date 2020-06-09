
function createMarkup(idName = 'root') {
	const loadingMessage = "Loading..";
	return {
		__html: `
<div id=${idName}>${loadingMessage}</div>
`};
};

export default function ({ idName }) {

	return (
		<>
			<div dangerouslySetInnerHTML={createMarkup(idName)} />
		</>
	);
}
