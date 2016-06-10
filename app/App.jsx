var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Load foundation
$(document).foundation();

//Style CSS
require('style!css!sass!appStyles');

ReactDOM.render(
	<h1>ReactJS Boilerplate App</h1>,
	document.getElementById('app')
);

//require('./redux-example.jsx');
require('./redux-todo-example.jsx');