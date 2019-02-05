import { getTableTemplate } from './get-table-template';

export function sortData (arrayData, typeTable, compareFunc) {
	let arrayDataCopy = arrayData.slice();

	arrayDataCopy.sort(compareFunc);
	arrayDataCopy.forEach(element => {
		getTableTemplate(element, typeTable);
	});
}