var redux = require('redux');

//Name reducer and action generators
//-------------------------------------------------

var nameReducer = (state = 'NA', action) => {
	switch(action.type) {
		case 'CHANGE_NAME':
			return action.name;
		default:
			return state;
	}
};

var changName = (name) => {
	return {
		type: 'CHANGE_NAME',
		name
	};
}

//Hobbies reducer and action generators
//-------------------------------------------------

var nextHobbyID = 1;
var hobbiesReducer = (state = [], action) => {
	switch(action.type) {
		case 'ADD_HOBBIES':
			return [
				...state,
				{
					id: nextHobbyID++,
					hobbies: action.hobbies
				}
			];
		case 'REMOVE_HOBBIES':
			return state.filter((hobby) => hobby.id !== action.id);
		default:
			return state;
	}
};

var addHobbies = (hobbies) => {
	return {
		type: 'ADD_HOBBIES',
		hobbies
	}
};

var removeHobbies = (id) => {
	return {
		type: 'REMOVE_HOBBIES',
		id
	}
};

//Movies reducer and action generators
//-------------------------------------------------

var nextMovieID = 1;
var moviesReducer = (state = [], action) => {

	switch(action.type) {
		case 'ADD_MOVIES':
			return [
				...state,
				{
					id: nextMovieID++,
					genre: action.movies.genre,
					title: action.movies.title
				}
			];
		case 'REMOVE_MOVIES':
			return state.filter((movie) => movie.id !== action.id);
		default:
			return state;
	}
};

var addMovies = (movies) => {
	return {
		type: 'ADD_MOVIES',
		movies
	}
};

var removeMovies = (id) => {
	return {
		type: 'REMOVE_MOVIES',
		id
	}
};

//Combiners and Store
//-------------------------------------------------

var reducer = redux.combineReducers({
	name: nameReducer,
	hobbies: hobbiesReducer,
	movies: moviesReducer
});

var store = redux.createStore(reducer, redux.compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f	//(f) => { return f; }
));

//Subscribe to changes
var unsubscribe = store.subscribe(() => {
	var state = store.getState();
});

//Dispatch actions
//-------------------------------------------------

store.dispatch(changName('AK'));

store.dispatch(addHobbies('running'));

store.dispatch(addMovies({
		genre: 'horror',
		title: 'abc111'
	}));

//unsubscribe();

store.dispatch(changName('Emily'));

store.dispatch(addHobbies('walking'));

store.dispatch(addMovies({
		genre: 'comedy',
		title: 'abc222'
	}));

store.dispatch(removeMovies(2));

store.dispatch(addMovies({
		genre: 'drama',
		title: 'abc333'
	}));

store.dispatch(removeHobbies(2));