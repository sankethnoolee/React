import React from 'react';
//if js name is not specified 
//by default index js in the folder will be loaded
import { selectSong } from '../../actions';
import SongsList from '../songsList/SongsList';
import SongDetail from '../songDetail/SongDetail';


const App = () =>{
	
	return (
		
		<div className = "ui container grid">
			<div className = "ui row">
				<div className = "column eight wide">
					<SongsList/>
				</div>
				<div className = "column eight wide">
					<SongDetail/>
				</div>
			
			</div>
			
		</div>
		
	);
	
}

export default App;