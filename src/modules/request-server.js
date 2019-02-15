import axios from 'axios';

import { filter } from './filter';
import { outputTable } from './output-table';

export function requestServer (typeTable, func = filter, filt) {
	const URL = 'https://www.mocky.io/v2/55f748b33568195d044b3dc8';

	axios.get(URL)
		.then(({ data }) => {
			outputTable(func(data, filt), typeTable);
			return;
		})
		.catch(error => new Error(`Network Error ${error}`));
}