var redux = require('redux');

console.log('start');

var initialState = {
	name: 'NA',
	hobbies: [],
	movies: []
};

var nextHobbyID = 1;
var nextMovieID = 1;

var reducer = (state = initialState, action) => {
	console.log(action);
	switch(action.type) {
		case 'CHANGE_NAME':
			return {
				...state,
				name: action.name
			};
		case 'ADD_HOBBIES':
			return {
				...state,
				hobbies: [
					...state.hobbies,
					{
						id: nextHobbyID++,
						hobbies: action.hobbies
					}
				]
			};
		case 'ADD_MOVIES':
			return {
				...state,
				movies: [
					...state.movies,
					{
						id: nextMovieID++,
						genre: action.movies.genre,
						title: action.movies.title
					}
				]
			};
		case 'REMOVE_HOBBIES':
			return {
				...state,
				hobbies: state.hobbies.filter((hobby) => hobby.id !== action.id)	//if(id != action.id) {return true;}else {return false;}
			};
		case 'REMOVE_MOVIES':
			return {
				...state,
				movies: state.movies.filter((movie) => movie.id !== action.id)
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
	//console.log('New State: ', store.getState());
});


var currentState = store.getState();

//console.log('current state: ', currentState);

store.dispatch({
	type: 'CHANGE_NAME',
	name: 'AK'
});

store.dispatch({
	type: 'ADD_HOBBIES',
	hobbies: 'running'
});

store.dispatch({
	type: 'ADD_MOVIES',
	movies: {
		genre: 'horror',
		title: 'abc111'
	}
});

//unsubscribe();

store.dispatch({
	type: 'CHANGE_NAME',
	name: 'Emily'
});

store.dispatch({
	type: 'ADD_HOBBIES',
	hobbies: 'walking'
});

store.dispatch({
	type: 'ADD_MOVIES',
	movies: {
		genre: 'comedy',
		title: 'abc222'
	}
});

store.dispatch({
	type: 'REMOVE_MOVIES',
	id: 2
});

store.dispatch({
	type: 'ADD_MOVIES',
	movies: {
		genre: 'drama',
		title: 'abc123'
	}
});

store.dispatch({
	type: 'REMOVE_HOBBIES',
	id: 2
});