import { getTableTemplate } from './get-table-template';

export function filterData (arrayData, typeTable, filterFunc) {
	arrayData.filter(filterFunc).forEach(element => {
		getTableTemplate(element, typeTable);
	});
}