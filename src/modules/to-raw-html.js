export function toRawHtml (element) {
	const tableTemplate = `<tr>
			<td><img src="${element.picture}" alt="Пользователь ${element.name.first} ${element.name.last} "/></td>
			<td>${element.name.first} ${element.name.last}</td>
			<td>${element.isActive}</td>
			<td>${element.about}</td>
			<td>${element.balance}</td>
			<td>${element.age}</td>
			<td>${element.registered}</td>
			<td>${element.company}</td>
			<td><a href="mailto:${element.email}">${element.email}</a></td>
			<td><a href="tel:${element.phone}">${element.phone}</a></td>
			<td>${element.address}</td>
		</tr>`;

	return tableTemplate;
}