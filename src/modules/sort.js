import getTableTemplate from './get-table-template';

export function compareAge (personA, personB) {
	return personA.age - personB.age;
}

export function compareName (personA, personB) {
	return personA.name.first.localeCompare(personB.name.first);

}

export function sortData (arrayData, typeTable, compareFunc) {
	let arrayDataCopy = arrayData.slice();

	arrayDataCopy.sort(compareFunc).forEach(element => getTableTemplate(element, typeTable));
}