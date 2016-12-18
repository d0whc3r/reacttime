var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
    getInitialState: function () {
        return {
            count: 0,
            countdownStatus: 'stopped'
        };
    },
    componentDidUpdate: function (prevProps, prevState) {
        if (this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus) {
                case 'started':
                    this.startTimer();
                    break;
                default:
            }
        }
    },
    startTimer: function () {
        this.timer = setInterval(() => {
            console.log('setInterval');
            var newCount = this.state.count - 1;
            newCount = newCount > 0 ? newCount : 0;
            this.setState({
                count: newCount
            });
            if (newCount == 0) {
                this.setState({
                    countdownState: 'stopped'
                });
                this.timer = null;
            }
        }, 1000);
    },
    handleSetCountdown: function (secs) {
        this.setState({
            count: secs,
            countdownStatus: 'started'
        });
    },
    render: function () {
        var {count} = this.state;
        return (
            <div>
                <Clock totalSeconds={count}/>
                <CountdownForm onSetCountdown={this.handleSetCountdown}/>
            </div>
        );
    }
});
module.exports = Countdown;