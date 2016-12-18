var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
    it('should exist', () => {
        expect(CountdownForm).toExist();
    });

    it('should call onSetCoundown if valid secs', () => {
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        var $el = $(ReactDOM.findDOMNode(countdownForm));
        var secs = '144';
        countdownForm.refs.secs.value = secs;
        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toHaveBeenCalledWith(parseInt(secs));
    });

    it('should NOT call onSetCoundown if invalid secs', () => {
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        var $el = $(ReactDOM.findDOMNode(countdownForm));
        var secs = 'asdf';
        countdownForm.refs.secs.value = secs;
        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toNotHaveBeenCalled();
    });
});