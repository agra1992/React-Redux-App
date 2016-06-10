var redux = require('redux');

console.log('start todo redux');

var startState = {
					searchText: '',
					showCompletedTodos: false,
					todos: []
				};

var reducer = (state = startState, action) => {
	return state;
};

var store = redux.createStore(reducer);

var currentState = store.getState();

console.log('current state: ', currentState);