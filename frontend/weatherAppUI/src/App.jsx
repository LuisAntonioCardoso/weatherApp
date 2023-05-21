import './App.css';
import Search from './components/Search';

function App() {
	const handleOnSearchChange = searchData => {
		console.log(searchData);
	};

	return (
		<div className='max-w-5xl mx-auto my-5'>
			<Search onSearchChange={handleOnSearchChange} />
		</div>
	);
}

export default App;
