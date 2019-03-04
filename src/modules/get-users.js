import axios from 'axios';

export async function getUsers () {
	const response = await axios.get('https://www.mocky.io/v2/55f748b33568195d044b3dc8');

	return response.data;
}