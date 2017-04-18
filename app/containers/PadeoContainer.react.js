var React = require('react');
var Padeo = require('../components/Padeo.react');
var padeoDraw = require('../components/padeoDraw.react');

var PadeoContainer = React.createClass({
  getInitialState: function (){
    return {
      heightInput: "",
      widthInput: "",
    }
  },
    handleInputWidthChange: function(evt) {
      this.setState({
        widthInput: evt.target.value
      })
    },
    handleInputHeightChange: function(evt) {
      this.setState({
        heightInput: evt.target.value
      })
    },

    render: function() {
        return (
          <div>
          <Padeo onHandleInputHeightChange={this.handleInputHeightChange}
          onHandleInputWidthChange={this.handleInputWidthChange}
          widthInput={this.state.widthInput}
          heightInput={this.state.heightInput}
           />
         
           <padeoDraw />
         </div>
     );
    }
});

module.exports = PadeoContainer
