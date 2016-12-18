var React = require('react');

var Clock = React.createClass({
    getDefaultProps: function () {
        totalSeconds: 0
    },
    propTypes: {
        totalSeconds: React.PropTypes.number
    },
    formatSeconds: function (total) {
        var secs = '0' + (total % 60);
        var min = '0' + (Math.floor(total / 60));
        return `${min.slice(-2)}:${secs.slice(-2)}`;
    },
    render: function () {
        var {totalSeconds} = this.props;
        return (
            <div className="clock">
                <span className="clock-text">
                    {this.formatSeconds(totalSeconds)}
                </span>
            </div>
        );
    }
});
module.exports = Clock;