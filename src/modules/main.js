import axios from 'axios';

import { filterData } from './filter-data';
import { sortData } from './sort-data';
import { isDataActive } from './data-active';
import { isDataLongSurname } from './data-long-surname';
import { getData } from './get-data';
import { compareAge } from './compare-age';
import { compareName } from './compare-name';

const URL = 'https://www.mocky.io/v2/55f748b33568195d044b3dc8';
const TABLE_DATA = document.querySelector('.data-all');
const TABLE_FILTER_ACTIVE = document.querySelector('.data-active');
const TABLE_SORT_AGE = document.querySelector('.data-age');
const TABLE_SORT_NAME = document.querySelector('.data-name');
const TABLE_FILTER_SURNAME = document.querySelector('.data-surname');

axios.get(URL)
	.then(({ data }) => {
		filterData(data, TABLE_DATA, getData);
		filterData(data, TABLE_FILTER_ACTIVE, isDataActive);
		filterData(data, TABLE_FILTER_SURNAME, isDataLongSurname);
		sortData(data, TABLE_SORT_AGE, compareAge);
		sortData(data, TABLE_SORT_NAME, compareName);
		return;
	})
	.catch(error => new Error(`Network Error ${error}`));