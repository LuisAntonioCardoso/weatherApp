import {useState} from 'react';
import {AsyncPaginate} from 'react-select-async-paginate';
import {GEO_API_URL, geoApiOptions} from '../api';

// eslint-disable-next-line react/prop-types
const Search = ({onSearchChange}) => {
	const [search, setSearch] = useState(null);

	const loadOptions = input => {
		return fetch(`${GEO_API_URL}&namePrefix=${input}`, geoApiOptions)
			.then(response => response.json())
			.then(response => {
				return {
					options: response.data.map(city => {
						return {
							value: `${city.latitude} ${city.longitude}`,
							label: `${city.name}, ${city.region}`
						};
					})
				};
			})
			.catch(error => console.log(error));
	};

	const handleOnChange = searchData => {
		setSearch(searchData);
		onSearchChange(searchData);
	};

	return (
		<AsyncPaginate
			placeholder='Search for city'
			debounceTimeout={600}
			value={search}
			onChange={handleOnChange}
			loadOptions={loadOptions}
		/>
	);
};

export default Search;
