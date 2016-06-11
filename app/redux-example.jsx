var actions = require('./actions/index');
var store = require('./store/configure.store').configure();

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

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changName('AK'));

store.dispatch(actions.addHobbies('running'));

store.dispatch(actions.addMovies({
		genre: 'horror',
		title: 'abc111'
	}));

//unsubscribe();

store.dispatch(actions.changName('Emily'));

store.dispatch(actions.addHobbies('walking'));

store.dispatch(actions.addMovies({
		genre: 'comedy',
		title: 'abc222'
	}));

store.dispatch(actions.removeMovies(2));

store.dispatch(actions.addMovies({
		genre: 'drama',
		title: 'abc333'
	}));

store.dispatch(actions.removeHobbies(2));