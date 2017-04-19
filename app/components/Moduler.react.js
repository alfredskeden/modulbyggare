var React = require('react');
var PropTypes = React.PropTypes;

var Moduler = React.createClass({

  handleAddSkiss: function (){
    this.props.onClickAddArtno(this.props.artno);
  },
  render: function (){
    return (
    <img src={require('./../modulbilder/' + this.props.artno + '.png')}
      alt={this.props.artno}
      className="img-rounded img-responsive img-thumbnail"
      onClick={this.handleAddSkiss} />
      )
  }
});

module.exports = Moduler;
