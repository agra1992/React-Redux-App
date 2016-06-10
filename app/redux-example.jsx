var redux = require('redux');

console.log('start');

var reducer = (state = {name: 'NA'}, action) => {

	switch(action.type) {
		case 'CHANGE_NAME':
			return {
				...state,
				name: action.name
			};
		default:
			return state;
	}
};

var store = redux.createStore(reducer, redux.compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f	//(f) => { return f; }
));

//Subscribe to changes
var unsubscribe = store.subscribe(() => {
	var state = store.getState();
	console.log('Name is: ', state.name);
});


var currentState = store.getState();

console.log('current state: ', currentState);

store.dispatch({
	type: 'CHANGE_NAME',
	name: 'AK'
});

//unsubscribe();

store.dispatch({
	type: 'CHANGE_NAME',
	name: 'Emily'
});