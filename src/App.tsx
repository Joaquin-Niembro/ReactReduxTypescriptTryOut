import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import './App.css';
import { reducers } from './reducers/index';
import Todos from './components/Todos'
const store = createStore(reducers, applyMiddleware(thunk));

function App(): JSX.Element {
	return (
		<Provider store={store}>
			<>
        <Todos />
      </>
		</Provider>
	);
}

export default App;
