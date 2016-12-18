var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
    it('should exist', () => {
        expect(Timer).toExist();
    });

    describe('handleStatusChange', () => {
        it('should set state status on started', () => {
            var timer = TestUtils.renderIntoDocument(<Timer/>);
            timer.handleStatusChange('started');
            expect(timer.state.count).toBe(0);
            expect(timer.state.timerStatus).toBe('started');

            setTimeout(() => {
                expect(timer.state.count).toBe(1);
                expect(timer.state.timerStatus).toBe('started');
                done();
            }, 1001);
        });

        it('should set pause status on paused', () => {
            var timer = TestUtils.renderIntoDocument(<Timer/>);
            var secs = 10;
            timer.setState({count: secs});
            timer.handleStatusChange('started');
            expect(timer.state.count).toBe(secs);
            timer.handleStatusChange('paused');
            expect(timer.state.timerStatus).toBe('paused');

            setTimeout(() => {
                expect(timer.state.count).toBe(secs);
                expect(timer.state.timerStatus).toBe('paused');
                done();
            }, 1001);
        });

        it('should set stoped status on stop', () => {
            var timer = TestUtils.renderIntoDocument(<Timer/>);
            var secs = 10;
            timer.setState({count: secs});
            timer.handleStatusChange('started');
            expect(timer.state.count).toBe(secs);
            timer.handleStatusChange('stopped');
            expect(timer.state.timerStatus).toBe('stopped');

            setTimeout(() => {
                expect(timer.state.count).toBe(0);
                expect(timer.state.timerStatus).toBe('stopped');
                done();
            }, 1001);
        });

    });

});