import { insertData } from './insert-data';

export function outputTable (arrayData, typeTable) {
	arrayData.forEach(element => {
		insertData(element, typeTable);
	});
}