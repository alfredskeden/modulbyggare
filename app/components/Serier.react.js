var React = require('react');
var PropTypes = React.PropTypes;

var Serier = React.createClass({

  handleOnClickSerie: function(){
    this.props.onOnClickSerie(this.props.index);
  },
  render: function (){
    return (<div style={{textAlign: 'center'}} onClick={this.handleOnClickSerie}>
      {this.props.namn}<br />
    <img src={require('./../seriebilder/' + this.props.namn.toLowerCase() + '.jpg')} alt={this.props.namn} className="img-rounded img-responsive img-thumbnail" />
    </div>)
  }
});

module.exports = Serier;
