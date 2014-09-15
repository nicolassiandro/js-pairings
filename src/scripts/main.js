/** 
	@jsx React.DOM 
*/

var MainComponent = require('./../components/MainComponent/scripts/MainComponent');
var React = require('react');

React.renderComponent(
    <MainComponent pageTitle="JS-Pairings" />,
    document.getElementById('main')
);