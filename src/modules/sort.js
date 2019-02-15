export function sort (arrayData, compareFunc) {
	const arrayDataCopy = arrayData.slice();

	return arrayDataCopy.sort(compareFunc);

}