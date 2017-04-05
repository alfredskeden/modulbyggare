var React = require('react');
var PropTypes = React.PropTypes;

var Moduler = React.createClass({

  handleAddSkiss: function (){
    this.props.onClickAddArtno(this.props.artno);
  },
  render: function (){
    return (<div style={{textAlign: 'center'}}>
      {this.props.namn + " - " + this.props.artno}<br />
    <img src={require('./../modulbilder/' + this.props.artno + '.png')}
      alt={this.props.artno}
      className="img-rounded img-responsive img-thumbnail"
      onClick={this.handleAddSkiss} />
      </div>)
  }
});

module.exports = Moduler;
