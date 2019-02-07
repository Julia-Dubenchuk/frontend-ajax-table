export function filterData (arrayData, filterFunc = Boolean) {
	return arrayData.filter(filterFunc);
}