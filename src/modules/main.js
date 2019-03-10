import { getUsers } from './get-users';
import { isActive } from './is-active';
import { isLongSurname } from './is-long-surname';
import { compareAge } from './compare-age';
import { compareName } from './compare-name';
import { toRowHtml } from './to-row-html';
import { renderTo } from './render-to';

const usersTable = document.querySelector('.data-all');
const activeUsersTable = document.querySelector('.data-active');
const ageSortedUsersTable = document.querySelector('.data-age');
const nameSortedUsersTable = document.querySelector('.data-name');
const longSurnameUsersTable = document.querySelector('.data-surname');

getUsers().then(function (users) {
	users
		.map(toRowHtml)
		.forEach(renderTo(usersTable));

	users
		.filter(isActive)
		.map(toRowHtml)
		.forEach(renderTo(activeUsersTable));

	users
		.concat()
		.sort(compareAge)
		.map(toRowHtml)
		.forEach(renderTo(ageSortedUsersTable));

	users
		.concat()
		.sort(compareName)
		.map(toRowHtml)
		.forEach(renderTo(nameSortedUsersTable));

	users
		.filter(isLongSurname)
		.map(toRowHtml)
		.forEach(renderTo(longSurnameUsersTable));

	return users;
}).catch(console.error);