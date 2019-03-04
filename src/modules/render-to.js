export function renderTo (typeTable) {
	return function (element) {
		typeTable.insertAdjacentHTML('beforeEnd', element);
	};
}