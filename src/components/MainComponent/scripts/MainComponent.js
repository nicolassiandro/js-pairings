/**
 * @jsx React.DOM
 */

var React = require('react');
var DevelopersList = require('../../DevelopersList/scripts/DevelopersList');

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
            <div className="center-block">
                <h2>{this.props.pageTitle}</h2>
                <div id="developersList">
                    <DevelopersList title="Developers"></DevelopersList>
                </div>


            </div>
            );
    }
});

module.exports = MainComponent;