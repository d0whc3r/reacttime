var React = require('react');

var CountdownForm = React.createClass({
    onSubmit: function (e) {
        e.preventDefault();
        var secs = this.refs.secs.value;

        console.log('input count', $('input').length);

        if (secs && secs.length && secs.match(/^[0-9]+$/)) {
            this.refs.secs.value = '';
            this.props.onSetCountdown(parseInt(secs, 10));
        }
    },
    render: function () {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="countdown-form">
                    <div>
                        <input type="text" ref="secs" placeholder="Time in seconds"/>
                    </div>
                    <div>
                        <input type="submit" className="button expanded" value="Start"/>
                    </div>
                </form>
            </div>
        );
    }
});
module.exports = CountdownForm;