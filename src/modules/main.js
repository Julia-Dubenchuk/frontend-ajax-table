import axios from 'axios';
import $ from 'jquery';

const URL = 'https://www.mocky.io/v2/55f748b33568195d044b3dc8';
let tableAll = $('.data-all');
let tableActive = $('.data-active');
let tableAge = $('.data-age');
let tableName = $('.data-name');
let tableSurname = $('.data-surname');
let tableTemplate;

function getTableTemplate (element, typeTable) {
	tableTemplate = `<tr>
			<td><img src="${element.picture}" alt="Пользователь ${element.name.first} ${element.name.last} "/></td>
			<td>${element.name.first} ${element.name.last}</td>
			<td>${element.isActive}</td>
			<td>${element.about}</td>
			<td>${element.balance}</td>
			<td>${element.age}</td>
			<td>${element.registered}</td>
			<td>${element.company}</td>
			<td><a href="mailto:${element.email}">${element.email}>/a></td>
			<td><a href="tel:${element.phone}">${element.phone}</a></td>
			<td>${element.address}</td>
		</tr>`;
	typeTable.append(tableTemplate);
}

function compareAge (personA, personB) {
	return personA.age - personB.age;
}

function compareName (first, second) {
	if (first.name.first < second.name.first) return -1;
	if (first.name.first > second.name.first) return 1;
	return 0;
}

function isActive (element) {
	return element.isActive;
}

function isLongLengthSurname (element) {
	return element.name.last.length > 5;
}

function filterData (arrayData, typeTable, filterCallback) {
	arrayData.filter(filterCallback).forEach(element => getTableTemplate(element, typeTable));
}

function sortAge (arrayData, typeTable) {
	arrayData.sort(compareAge).forEach(element => getTableTemplate(element, typeTable));
}

function sortName (arrayData, typeTable) {
	arrayData.sort(compareName).forEach(element => getTableTemplate(element, typeTable));
}

function getAllData (arrayData, typeTable) {
	arrayData.forEach(element => getTableTemplate(element, typeTable));
}

axios.get(URL)
	.then(response => {
		getAllData(response.data, tableAll);
		filterData(response.data, tableActive, isActive);
		filterData(response.data, tableSurname, isLongLengthSurname);
		sortAge(response.data, tableAge);
		sortName(response.data, tableName);
		return;
	})
	.catch(error => new Error(`Network Error ${error}`));