var redux = require('redux');

console.log('start');

var reducer = (state = {name: 'NA'}, action) => {
	return state;
};

var store = redux.createStore(reducer);

var currentState = store.getState();

console.log('current state: ', currentState);