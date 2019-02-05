import { getTableTemplate } from './get-table-template';

export function sortData (arrayData, typeTable, compareFunc) {
	const arrayDataCopy = arrayData.slice();

	arrayDataCopy.sort(compareFunc);
	arrayDataCopy.forEach(element => {
		getTableTemplate(element, typeTable);
	});
}