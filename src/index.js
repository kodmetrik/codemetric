import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './App.js';
import Firebase, { FirebaseContext } from './Firebase';
ReactDOM.render(
	<FirebaseContext.Provider value={new Firebase()}>
		<App />
	</FirebaseContext.Provider>
		
	,
	document.getElementById('root')
);
