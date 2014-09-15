/**
 * @jsx React.DOM
 */

var Icon = require('../../Icon/scripts/Icon');
var React = require('react');

var ListItem = React.createClass({

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
                <p>{this.props.title}</p>
                <Icon></Icon>
            </div>
        );
    }
});

module.exports = ListItem;