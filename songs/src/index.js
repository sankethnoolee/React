//third party

import React from 'react';
import ReactDOM from 'react-dom';

//provider
import {Provider} from 'react-redux';
//store
import {createStore} from 'redux';



//our components
import App from './components/app/App';
import reducers from './reducers';

ReactDOM.render(
	<Provider store = {createStore(reducers)}>
		<App />
	</Provider>
	, document.getElementById('root')
	);

