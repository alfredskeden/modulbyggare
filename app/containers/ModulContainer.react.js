var React = require('react');
var Moduler = require('../components/Moduler.react');
var HeaderObject = require('../components/HeaderObject.react');
var PropTypes = React.PropTypes;

var ModulContainer = React.createClass({

    handleOnClickModul: function(artno) {
        this.props.addSkissArtno(artno);
    },
    render: function() {
        var render_all = this.props.serieInfo.utemobler[this.props.selectedSerie].data.map(function(data, index) {

            return (
              <div key={index}>
                <div style={{
                    float: "right",
                    textAlign: "center",
                    width: "170px",
                    marginRight: "10px",
                }}>
                    <HeaderObject namn={data.name} artno={data.artno} />
                    <br />
                    <Moduler artno={data.artno} namn={data.name} selectedSerie={this.props.selectedSerie} onClickAddArtno={this.handleOnClickModul}/>
                </div>
                {(index+1)%3==0 && <br style={{clear: "both",}} />}
                </div>
            );
    }.bind(this));

    return (
        <div>{render_all}</div>
    );
}});

ModulContainer.propTypes = {
selectedSerie: PropTypes.number.isRequired
}

module.exports = ModulContainer;
