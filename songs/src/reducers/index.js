import {combineReducers} from 'redux';

//implementing reducers

const songsReducer = () =>{
	return [
		{
			title : 'No Scrubs',
			duration : '4:05'
		},{
			title : 'No Scrubs1',
			duration : '7:05'
		},{
			title : 'No sasdas',
			duration : '2:05'
		},{
			title : 'No S21312',
			duration : '1:05'
		}
	
	]
};

const selectedSongReducer = (selectedSong = null , action) =>{
	if(action.type === "SONG_SELECTED"){
		return action.payload;
	}
	
	return selectedSong;
};


export default combineReducers({
	songs : songsReducer,
	selectedSong : selectedSongReducer
});


