import { getTableTemplate } from './get-table-template';

export function filterData (arrayData, typeTable, filterFunc = Boolean) {
	arrayData.filter(filterFunc).forEach(element => {
		getTableTemplate(element, typeTable);
	});
}