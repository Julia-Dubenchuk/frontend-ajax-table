import { getTableTemplate } from './get-table-template';

export function outputTable (arrayData, typeTable) {
	arrayData.forEach(element => {
		getTableTemplate(element, typeTable);
	});
}