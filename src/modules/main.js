import axios from 'axios';
import $ from 'jquery';

import { filterData, isDataActive, isDataLongSurname, getData } from './filter';
import { sortData, compareAge, compareName } from './sort';

const URL = 'https://www.mocky.io/v2/55f748b33568195d044b3dc8';
const TABLE_DATA = $('.data-all');
const TABLE_FILTER_ACTIVE = $('.data-active');
const TABLE_SORT_AGE = $('.data-age');
const TABLE_SORT_NAME = $('.data-name');
const TABLE_FILTER_SURNAME = $('.data-surname');

axios.get(URL)
	.then(response => {
		filterData(response.data, TABLE_DATA, getData);
		filterData(response.data, TABLE_FILTER_ACTIVE, isDataActive);
		filterData(response.data, TABLE_FILTER_SURNAME, isDataLongSurname);
		sortData(response.data, TABLE_SORT_AGE, compareAge);
		sortData(response.data, TABLE_SORT_NAME, compareName);
		return;
	})
	.catch(error => new Error(`Network Error ${error}`));