var redux = require('redux');

console.log('start todo redux');

var startState = {
	searchText: '',
	showCompletedTodos: false,
	todos: []
};

var reducer = (state = startState, action) => {
	switch(action.type) {
		case 'CHANGE_SEARCH_TEXT':
			return {
				...state,
				searchText: action.searchText
			};
		default:
			return state;
	}
};

var store = redux.createStore(reducer, redux.compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f	//(f) => { return f; }
));

var unsubscribe = store.subscribe(() => {
	var state = store.getState();
	console.log('Name is: ', state.name);
	document.getElementById('app').innerHTML = state.searchText;
});

var currentState = store.getState();

console.log('current state: ', currentState);

store.dispatch({
	type: 'CHANGE_SEARCH_TEXT',
	searchText: 'abcd1'
});

store.dispatch({
	type: 'CHANGE_SEARCH_TEXT',
	searchText: 'abcd2'
});

store.dispatch({
	type: 'CHANGE_SEARCH_TEXT',
	searchText: 'abcd3'
});

console.log('new state: ', store.getState());
