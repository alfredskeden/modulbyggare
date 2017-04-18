var React = require('react');

var Header = require('./components/Header.react');
var SerieContainer = require('./containers/SerieContainer.react');
var ModulContainer = require('./containers/ModulContainer.react')
var SkissContainer = require('./containers/SkissContainer.react')
var PadeoContainer = require('./containers/PadeoContainer.react')
var ButtonToTrademax = require('./components/ButtonToTrademax.react')
var loadJSON = require('./info.json');
var loadJSON2 = require('./components.json')

var Application = React.createClass({
  getInitialState: function (){
    return {
      serieInfo: loadJSON,
      selectedSerie: 0,
      skissArray: [],
      componentsArray: loadJSON2,
      hrefString: "#"
    }
  },
  handleChangeSerie: function(index){
    if(this.state.selectedSerie != index){
      this.setState({
        selectedSerie: index,
        skissArray: []
      })
    }
  },
  addSkissArtno: function (artno){

    var hrefLink = this.updateLink(this.state.skissArray.concat([artno]));

    this.setState({
      skissArray: this.state.skissArray.concat([artno]),
      hrefString: hrefLink,
    });

  },
  updateLink: function(arraySkiss){

    var tempSkiss = arraySkiss;

    tempSkiss.sort();
    var finalString = "";

        for (var i = 0; i < tempSkiss.length; i++) {
          var count = 1;
          if (tempSkiss[i] != tempSkiss[i - 1]) {
              for (var j = i + 1; j < tempSkiss.length; j++) {
                  if (tempSkiss[i] === tempSkiss[j]) {
                      count++;
                  }
              }

              if (finalString === "") {
                  finalString = tempSkiss[i] + "|" + count;
              } else {
                  finalString = finalString + ";" + tempSkiss[i] + "|" + count;
              }
          }
      }

      for (var i = 0; i < this.state.componentsArray.length; i++){
          if (finalString == this.state.componentsArray[i][1]){
            return this.state.componentsArray[i][0];
          }
      }
      return "inget_fanns";
  },
  handleRemoveImageFromArray: function (index){
    console.log(this.state.skissArray + " " + index);

    var indexof = this.state.skissArray.indexOf(index);

    this.setState({
      skissArray: this.state.skissArray.splice(indexof, 1),
    })
    console.log(this.state.skissArray);
  },
  render: function () {

    return (
      <div className="container-fluid">
        <Header />
        <div className="row">
        <SerieContainer
          serieInfo={this.state.serieInfo}
          selectedSerie={this.state.selectedSerie}
          onChangeSerie={this.handleChangeSerie} />
      </div>
      <div className="row">
        <ModulContainer
          serieInfo={this.state.serieInfo}
          selectedSerie={this.state.selectedSerie}
          addSkissArtno={this.addSkissArtno}/>
        </div>
        <PadeoContainer />
        <SkissContainer
          serieInfo={this.state.serieInfo}
          selectedSerie={this.state.selectedSerie}
          skissArray={this.state.skissArray} removeImageFromArray={this.handleRemoveImageFromArray} />
          <ButtonToTrademax href={this.state.hrefString} />
      </div>
    );
  }
});

module.exports = Application;
