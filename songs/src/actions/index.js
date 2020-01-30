//Action creator

export const selectSong = (songSelected) => {
	//return an action
	return {
		type : "SONG_SELECTED",
		payload : songSelected
		
	};
};
