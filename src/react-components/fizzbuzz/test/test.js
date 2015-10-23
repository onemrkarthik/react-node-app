/** @jsx React.DOM */
var expect = require('chai').expect;
var React = require('react');
var FizzBuzzComponent = require('../index');
var TestUtils = require('react-addons-test-utils');

describe('CheckboxWithLabel', function() {
  it('changes the text after click', function() {
    // Render a checkbox with label in the document
    var fizzbuzzInstance = TestUtils.renderIntoDocument(
      <FizzBuzzComponent title="blah"/>
    );

    // Verify that it's Off by default
    var spanElement = TestUtils.findRenderedDOMComponentWithTag(fizzbuzzInstance, 'span');
    expect(spanElement.textContent).to.equal('blah');
  });
});
