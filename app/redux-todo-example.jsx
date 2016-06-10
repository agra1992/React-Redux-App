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

var store = redux.createStore(reducer);

var currentState = store.getState();

console.log('current state: ', currentState);

store.dispatch({
	type: 'CHANGE_SEARCH_TEXT',
	searchText: 'abcd'
});

console.log('new state: ', store.getState());
