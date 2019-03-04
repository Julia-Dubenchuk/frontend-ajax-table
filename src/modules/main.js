import { getUsers } from './getUsers';
import { isActive } from './isActive';
import { isLongSurname } from './isLongSurname';
import { compareAge } from './compareAge';
import { compareName } from './compareName';
import { toRawHtml } from './toRawHtml';
import { renderTo } from './renderTo';

const usersTable = document.querySelector('.data-all');
const activeUsersTable = document.querySelector('.data-active');
const ageSortedUsersTable = document.querySelector('.data-age');
const nameSortedUsersTable = document.querySelector('.data-name');
const longSurnameUsersTable = document.querySelector('.data-surname');

getUsers().then(function (users) {
	users
		.map(toRawHtml)
		.forEach(el => renderTo(el, usersTable));

	users
		.filter(isActive)
		.map(toRawHtml)
		.forEach(el => renderTo(el, activeUsersTable));

	users
		.concat()
		.sort(compareAge)
		.map(toRawHtml)
		.forEach(el => renderTo(el, ageSortedUsersTable));

	users
		.concat()
		.sort(compareName)
		.map(toRawHtml)
		.forEach(el => renderTo(el, nameSortedUsersTable));

	users
		.filter(isLongSurname)
		.map(toRawHtml)
		.forEach(el => renderTo(el, longSurnameUsersTable));

	return users;
}).catch(console.error);