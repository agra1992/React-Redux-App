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

var store = redux.createStore(reducer);

var currentState = store.getState();

console.log('current state: ', currentState);

store.dispatch({
	type: 'CHANGE_NAME',
	name: 'AK'
});

console.log('new status', store.getState());