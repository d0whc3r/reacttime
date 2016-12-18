var React = require('react');

var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

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
                case 'stopped':
                    if(this.timer) {
                        clearInterval(this.timer);
                        this.timer = undefined;
                    }
                    this.setState({
                        count: 0
                    });
                    break;
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
                default:
            }
        }
    },
    // componentWillUpdate: function (nextProps, nextState) {
    //     console.log('Will update!');
    // },
    // componentWillMount: function () {
    //     console.log('Will Mount');
    // },
    // componentDidMount: function () {
    //     console.log('Mounted!');
    // },
    componentWillUnmount: function () {
        clearInterval(this.timer);
        this.timer = undefined;
    },
    startTimer: function () {
        this.timer = setInterval(() => {
            var newCount = this.state.count - 1;
            newCount = newCount > 0 ? newCount : 0;
            this.setState({
                count: newCount
            });
            if(newCount==0) {
                this.setState({
                    countdownStatus: 'stopped'
                });
            }
        }, 1000);
    },
    handleSetCountdown: function (secs) {
        this.setState({
            count: secs,
            countdownStatus: 'started'
        });
    },
    handleStatusChange: function (newStatus) {
        this.setState({
            countdownStatus: newStatus
        });
    },
    render: function () {
        var {count, countdownStatus} = this.state;
        var renderControls = () => {
            if (countdownStatus !== 'stopped') {
                return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>;
            } else {
                return <CountdownForm onSetCountdown={this.handleSetCountdown}/>;
            }
        };

        return (
            <div>
                <h1 className="page-title">Countdown App</h1>
                <Clock totalSeconds={count}/>
                {renderControls()}
            </div>
        );
    }
});
module.exports = Countdown;