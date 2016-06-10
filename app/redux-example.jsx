var redux = require('redux');
var axios = require('axios');

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

//Map reducer and action generators
//-------------------------------------------------

var mapReducer = (state = {isFetching: false, url: undefined}, action) => {
	switch(action.type) {
		case 'START_LOCATION_FETCH':
			return {
				isFetching: true,
				url: undefined
			};
		case 'COMPLETE_LOCATION_FETCH':
			return {
				isFetching: false,
				url: action.url
			};
		default:
			return state;
	}
};

var startLocationFetch = () => {
	return {
		type: 'START_LOCATION_FETCH'
	}
}

var completeLocationFetch = (url) => {
	return {
		type: 'COMPLETE_LOCATION_FETCH',
		url
	}
}

var fetchLocation = () => {
	store.dispatch(startLocationFetch());

	axios.get('http://ipinfo.io').then((res) => {
		var loc = res.data.loc;
		var baseURL = 'http://maps.google.com?q=';

		store.dispatch(completeLocationFetch(baseURL + loc));
	});
};

//Combiners and Store
//-------------------------------------------------

var reducer = redux.combineReducers({
	name: nameReducer,
	hobbies: hobbiesReducer,
	movies: moviesReducer,
	map: mapReducer
});

var store = redux.createStore(reducer, redux.compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f	//(f) => { return f; }
));

//Subscribe to changes
var unsubscribe = store.subscribe(() => {
	var state = store.getState();

	if(state.map.isFetching) {
		document.getElementById('app').innerHTML = "Loading...";
	}
	else if(state.map.url) {
		document.getElementById('app').innerHTML = '<a href=' + state.map.url + ' target="_blank">View Location</a>';	
	}
});

//Dispatch actions
//-------------------------------------------------

fetchLocation();

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