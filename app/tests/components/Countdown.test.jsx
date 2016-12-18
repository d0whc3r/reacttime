var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
    it('should exist', () => {
        expect(Countdown).toExist();
    });

    describe('handleSetCountdown', () => {
        it('should set state to started', () => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            var secs = 10;
            countdown.handleSetCountdown(secs);
            expect(countdown.state.count).toBe(secs);
            expect(countdown.state.countdownStatus).toBe('started');

            setTimeout(() => {
                expect(countdown.state.count).toBe(secs - 1);
                expect(countdown.state.countdownStatus).toBe('stopped');
                done();
            }, 1001);
        });

        it('should not set count to negative', () => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            var secs = 1;
            countdown.handleSetCountdown(secs);
            expect(countdown.state.count).toBe(secs);
            expect(countdown.state.countdownStatus).toBe('started');

            setTimeout(() => {
                expect(countdown.state.count).toNotBe(secs - 2);
                expect(countdown.state.count).toBe(0);
                expect(countdown.state.countdownStatus).toBe('stopped');
                done();
            }, 2001);
        });

        it('should pause countdown on paused status', () => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            var secs = 3;
            countdown.handleSetCountdown(secs);
            countdown.handleStatusChange('paused');

            setTimeout(() => {
                expect(countdown.state.count).toBe(secs);
                expect(countdown.state.countdownStatus).toBe('paused');
                done();
            }, 1001);
        });

        it('should stop countdown on stopped status', () => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            var secs = 3;
            countdown.handleSetCountdown(secs);
            countdown.handleStatusChange('stopped');

            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
                expect(countdown.state.countdownStatus).toBe('stopped');
                done();
            }, 1001);
        });
    });

});