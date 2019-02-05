import { getTableTemplate } from './get-table-template';

export function sortData (arrayData, typeTable, compareFunc) {
	const ARRAY_DATA_COPY = arrayData.slice();

	ARRAY_DATA_COPY.sort(compareFunc);
	ARRAY_DATA_COPY.forEach(element => {
		getTableTemplate(element, typeTable);
	});
}