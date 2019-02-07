export function sortData (arrayData, compareFunc) {
	const arrayDataCopy = arrayData.slice();

	return arrayDataCopy.sort(compareFunc);

}