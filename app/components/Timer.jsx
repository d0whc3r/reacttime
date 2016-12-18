var React = require('react');
var Clock = require('Clock');

var Timer = React.createClass({
    render: function () {
        return (
            <div>
                <p>Timer.jsx Rendered</p>
                <Clock totalSeconds={987}/>
            </div>
        );
    }
});
module.exports = Timer;