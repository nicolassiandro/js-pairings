/**
 * @jsx React.DOM
 */

var React = require('react');
var Developer = require('../../Developer/scripts/Developer');

var DevelopersList = React.createClass({

    getDefaultProps: function() {
        return {
            title: 'default_title'
        };
    },

    propTypes: {
        title: React.PropTypes.string
    },

    render: function() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <Developer name="Nicolás Siandro" picture="images/nico.jpg"></Developer>
                <Developer name="Gabriel Martinez" picture="images/gaby.jpg"></Developer>
            </div>
            );
    }
});

module.exports = DevelopersList;
