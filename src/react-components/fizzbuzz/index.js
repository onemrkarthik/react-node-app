/** @jsx React.DOM */

var React = require('react');

var FizzBuzzComponent = React.createClass({
  getInitialState: function() {
    return {
      title: this.props.title
    };
  },
  render: function() {
    return (
      <span>{this.props.title}</span>
    );
  }
});

module.exports = FizzBuzzComponent;
