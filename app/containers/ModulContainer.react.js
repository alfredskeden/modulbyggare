var React = require('react');
var Moduler = require('../components/Moduler.react');
var PropTypes = React.PropTypes;

var ModulContainer = React.createClass({

    handleOnClickModul: function(artno){
      this.props.addSkissArtno(artno);
    },
    render: function() {
        var render_all = this.props.serieInfo.utemobler[this.props.selectedSerie].data.map(function(data, index) {
            if (index === 0) {
                if (12 % (this.props.serieInfo.utemobler[this.props.selectedSerie].data.length*2) === 0) {
                    return <div className={"col-md-2 col-xs-2"} key={data.artno}>
                        <Moduler artno={data.artno} namn={data.name} selectedSerie={this.props.selectedSerie} onClickAddArtno={this.handleOnClickModul}/>
                    </div>
                } else {
                  return <div className={"col-md-2 col-xs-2 col-xs-offset-" + (12-(this.props.serieInfo.utemobler[this.props.selectedSerie].data.length*2))/2 + " col-md-offset-" + (12-(this.props.serieInfo.utemobler[this.props.selectedSerie].data.length*2))/2} key={data.artno}>
                      <Moduler artno={data.artno} namn={data.name} selectedSerie={this.props.selectedSerie} onClickAddArtno={this.handleOnClickModul}/>
                  </div>
                }
            } else {
                return <div className={"col-md-2 col-xs-2"} key={data.artno}>
                    <Moduler artno={data.artno} namn={data.name} selectedSerie={this.props.selectedSerie} onClickAddArtno={this.handleOnClickModul}/>
                </div>
            }
        }.bind(this));

        return (
            <div>{render_all}</div>
        );
    }
});

ModulContainer.propTypes = {
    selectedSerie: PropTypes.number.isRequired
}

module.exports = ModulContainer;
