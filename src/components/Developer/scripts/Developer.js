/**
 * @jsx React.DOM
 */

var React = require('react');

var Developer = React.createClass({

    getDefaultProps: function() {
        return {
            name: 'unknown',
            picture: 'images/unknown.jpg'
        };
    },

    propTypes: {
        name: React.PropTypes.string,
        picture: React.PropTypes.string
    },

    render: function() {
        return (
            <div>
                <input type="checkbox" name="names" />
                <img src={this.props.picture} className="img-rounded" />
                <span>{this.props.name}</span>
            </div>
        );
    }
});

module.exports = Developer;