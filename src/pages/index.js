var template = require('./template.marko');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var FizzBuzzComponent = require('../react-components/fizzbuzz');

module.exports = function(req, res){
	var markup = ReactDOMServer.renderToString(React.createElement(FizzBuzzComponent, {
        title: 'blah'
	}));

	template.render({
		markup: markup
	}, res);
};
