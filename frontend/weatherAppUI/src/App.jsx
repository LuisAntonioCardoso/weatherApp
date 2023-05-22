import './App.css';
import UpgradeWeatherApp from './components/UpgradeWeatherApp';
import BaseWeatherApp from './components/BaseWeatherApp';

function App() {
	return (
		<div className='max-w-5xl mx-auto my-5'>
			<BaseWeatherApp />
			<div className='h-[2px] bg-slate-600 my-4'></div>
			<UpgradeWeatherApp />
		</div>
	);
}

export default App;

/**~
 * console.log('data: ', searchData);
		fetch(`${LOCAL_NAME_API_URL}/id/${name}`)
			.then(response => response.json())
			.then(response => {
				console.log('name: ', response);
			})
			.catch(error => console.log(error));

 */
