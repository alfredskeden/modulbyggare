var React = require('react');
var Serier = require('../components/Serier.react');
var HeaderObject = require('../components/HeaderObject.react');
var PropTypes = React.PropTypes;

var SerieContainer = React.createClass({

    handleOnClickSerie: function(index) {
        this.props.onChangeSerie(index);
    },
    render: function() {
        var render_all = this.props.serieInfo.utemobler.map(function(utemobler, index) {
                return (
                <div key={index}>
                <div style={{float: "left", textAlign: "center", width: "200px", marginLeft: "10px", }}>
                <HeaderObject namn={utemobler.namn} />
                <br />
                <Serier namn={utemobler.namn} selectedSerie={this.props.selectedSerie} index={index} onOnClickSerie={this.handleOnClickSerie}/>
                </div>
                {(index+1)%3==0 && <br style={{clear: "both",}} />}
                </div>
            );
        }.bind(this));

        return (
          <div>{render_all}</div>
        );
    }
});

module.exports = SerieContainer;
