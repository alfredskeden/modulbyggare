var React = require('react');
var Serier = require('../components/Serier.react');
var PropTypes = React.PropTypes;

var SerieContainer = React.createClass({

    handleOnClickSerie: function(index) {
        this.props.onChangeSerie(index);
    },
    render: function() {
        var render_all = this.props.serieInfo.utemobler.map(function(utemobler, index) {
            if (index === 0) {
                return <div className={"col-md-2 col-xs-2 col-xs-offset-" + (12 - (2 * this.props.serieInfo.utemobler.length)) / 2 + " col-md-offset-" + (12 - (2 * this.props.serieInfo.utemobler.length)) / 2} key={utemobler.namn}>
                    <Serier namn={utemobler.namn} selectedSerie={this.props.selectedSerie} index={index} onOnClickSerie={this.handleOnClickSerie}/>
                </div>
            } else {
                return <div className={"col-md-2 col-xs-2"} key={utemobler.namn}>
                    <Serier namn={utemobler.namn} selectedSerie={this.props.selectedSerie} index={index} onOnClickSerie={this.handleOnClickSerie}/>
                </div>
            }
        }.bind(this));

        return (
            <div>{render_all}</div>
        );
    }
});

module.exports = SerieContainer;
