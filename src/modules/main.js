import axios from 'axios';
import $ from 'jquery';

const URL = 'http://www.mocky.io/v2/55f748b33568195d044b3dc8';

axios.get(URL)
.then(response => {
	let tableAll = $('.data-all');
	let tableActive = $('.data-active');
	let tableAge = $('.data-age');
	let tableName = $('.data-name');
	let tableSurname = $('.data-surname');
	let tableTemplate;
	function sortOutData (arrayData, typeTable, table = null) {

		arrayData.forEach(element => {
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
			if (element.isActive && table === 'active') {
				typeTable.append(tableTemplate);
			} else if (element.name.last.length > 5 && table === 'surname') {
				typeTable.append(tableTemplate);
			} else if(table === null) {
				typeTable.append(tableTemplate);
			}
		});

	}

		function compareAge (personA, personB) {
			return personA.age - personB.age;
		}

		function compareName (first, second) {
			if(first.name.first < second.name.first) return -1;
			if(first.name.first > second.name.first) return 1;
			return 0;
		}

		sortOutData(response.data, tableAll);
		sortOutData(response.data, tableActive, 'active');
		sortOutData(response.data, tableSurname, 'surname');
		sortOutData(response.data.sort(compareAge), tableAge);
		sortOutData(response.data.sort(compareName), tableName);
	})
	.catch(error => new Error(`Network Error ${RangeError}`));