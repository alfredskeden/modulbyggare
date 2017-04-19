var React = require('react');
var Padeo = require('../components/Padeo.react');

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

      var temp = evt.target.value;
      console.log(temp + " " + evt.target.value);
      if(temp > 1000){
        temp = 1000;
      }

      this.setState({
        heightInput: temp
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
         </div>
     );
    }
});

module.exports = PadeoContainer
