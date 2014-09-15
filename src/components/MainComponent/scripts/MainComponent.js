/**
 * @jsx React.DOM
 */

var React = require('react');

var MainComponent = React.createClass({

    getDefaultProps: function() {
        return {
            pageTitle: 'default_page_title'
        };
    },

    propTypes: {
        pageTitle: React.PropTypes.string
    },

    render: function() {
        return (
            <div>
                <h2>{this.props.pageTitle}</h2>
            </div>
            );
    }
});

module.exports = MainComponent;