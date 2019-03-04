import { getUsers } from './get-users';
import { isActive } from './is-active';
import { isLongSurname } from './is-long-surname';
import { compareAge } from './compare-age';
import { compareName } from './compare-name';
import { toRawHtml } from './to-raw-html';
import { renderTo } from './render-to';

const usersTable = document.querySelector('.data-all');
const activeUsersTable = document.querySelector('.data-active');
const ageSortedUsersTable = document.querySelector('.data-age');
const nameSortedUsersTable = document.querySelector('.data-name');
const longSurnameUsersTable = document.querySelector('.data-surname');

getUsers().then(function (users) {
	users
		.map(toRawHtml)
		.forEach(renderTo(usersTable));

	users
		.filter(isActive)
		.map(toRawHtml)
		.forEach(renderTo(activeUsersTable));

	users
		.concat()
		.sort(compareAge)
		.map(toRawHtml)
		.forEach(renderTo(ageSortedUsersTable));

	users
		.concat()
		.sort(compareName)
		.map(toRawHtml)
		.forEach(renderTo(nameSortedUsersTable));

	users
		.filter(isLongSurname)
		.map(toRawHtml)
		.forEach(renderTo(longSurnameUsersTable));

	return users;
}).catch(console.error);