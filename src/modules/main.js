import { requestServer } from './request-server';
import { filter } from './filter';
import { sort } from './sort';
import { isDataActive } from './data-active';
import { isDataLongSurname } from './data-long-surname';
import { compareAge } from './compare-age';
import { compareName } from './compare-name';

const tableData = document.querySelector('.data-all');
const tableFilterActive = document.querySelector('.data-active');
const tableSortAge = document.querySelector('.data-age');
const tableSortName = document.querySelector('.data-name');
const tableFilterSurname = document.querySelector('.data-surname');

requestServer(tableData);
requestServer(tableFilterActive, filter, isDataActive);
requestServer(tableFilterSurname, filter, isDataLongSurname);
requestServer(tableSortAge, sort, compareAge);
requestServer(tableSortName, sort, compareName);