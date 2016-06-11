var axios = require('axios');

export var changName = (name) => {
	return {
		type: 'CHANGE_NAME',
		name
	};
}

export var addHobbies = (hobbies) => {
	return {
		type: 'ADD_HOBBIES',
		hobbies
	}
};

export var removeHobbies = (id) => {
	return {
		type: 'REMOVE_HOBBIES',
		id
	}
};

export var addMovies = (movies) => {
	return {
		type: 'ADD_MOVIES',
		movies
	}
};

export var removeMovies = (id) => {
	return {
		type: 'REMOVE_MOVIES',
		id
	}
};

export var startLocationFetch = () => {
	return {
		type: 'START_LOCATION_FETCH'
	}
}

export var completeLocationFetch = (url) => {
	return {
		type: 'COMPLETE_LOCATION_FETCH',
		url
	}
}

export var fetchLocation = () => {
	return (dispatch, getState) => {
		dispatch(startLocationFetch());

		axios.get('http://ipinfo.io').then((res) => {
			var loc = res.data.loc;
			var baseURL = 'http://maps.google.com?q=';

			dispatch(completeLocationFetch(baseURL + loc));
		});
	};
};
