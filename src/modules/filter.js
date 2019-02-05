import getTableTemplate from './get-table-template';

export function isDataActive (element) {
	return element.isActive;
}

export function isDataLongSurname (element) {
	return element.name.last.length > 5;
}

export function getData () {
	return true;
}

export function filterData (arrayData, typeTable, filterFunc) {
	arrayData.filter(filterFunc).forEach(element => getTableTemplate(element, typeTable));
}