import { getTableTemplate } from './get-table-template';

export function insertData (element, typeTable) {
	typeTable.insertAdjacentHTML('beforeEnd', getTableTemplate(element));
}