var React = require('react');
var PropTypes = React.PropTypes;

var Serier = React.createClass({

    handleOnClickSerie: function() {
        this.props.onOnClickSerie(this.props.index);
    },
    render: function() {
        return (

          <img src={require('./../seriebilder/' + this.props.namn.toLowerCase() + '.jpg')}
            alt={this.props.namn}
            className="img-rounded img-responsive img-thumbnail" style={{marginLeft: "20px"}}
            onClick={this.handleOnClickSerie}
            />);
    }
});

module.exports = Serier;
