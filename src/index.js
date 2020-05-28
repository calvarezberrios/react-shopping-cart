import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import { createStore, applyMiddleware} from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";
import './sass/index.scss';
import App from './App';

const AppWithRouter = withRouter(App);
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
	<Router>
		<Provider store = {store}>
			<AppWithRouter />
		</Provider>
	</Router>,
	document.getElementById('root')
);
