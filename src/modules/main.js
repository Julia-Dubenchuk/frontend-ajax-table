import axios from 'axios';

import { filterData } from './filter-data';
import { sortData } from './sort-data';
import { isDataActive } from './data-active';
import { isDataLongSurname } from './data-long-surname';
import { compareAge } from './compare-age';
import { compareName } from './compare-name';

const URL = 'https://www.mocky.io/v2/55f748b33568195d044b3dc8';
const tableData = document.querySelector('.data-all');
const tableFilterActive = document.querySelector('.data-active');
const tableSortAge = document.querySelector('.data-age');
const tableSortName = document.querySelector('.data-name');
const tableFilterSurname = document.querySelector('.data-surname');

axios.get(URL)
	.then(({ data }) => {
		filterData(data, tableData);
		filterData(data, tableFilterActive, isDataActive);
		filterData(data, tableFilterSurname, isDataLongSurname);
		sortData(data, tableSortAge, compareAge);
		sortData(data, tableSortName, compareName);
		return;
	})
	.catch(error => new Error(`Network Error ${error}`));