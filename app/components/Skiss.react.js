var React = require('react');
var Draggable = require('react-draggable');
var DraggableCore = Draggable.DraggableCore;
var trashcanImage = require('./../images/bajs.png');
var rotateImage = require('./../images/rotate.png');

var transformStyle = {
  transform: 'translate(0px, -26px)'
}

var Skiss = React.createClass({

  getInitialState: function(){
    return {
      angle: 0,
      selectedImage: 0,
    };
  },
  rotateImage: function(){
    if(this.state.angle === 3){
      this.setState({
          angle: 0
      });
    }
    else {
      this.setState({
        angle: this.state.angle + 1
      });
    }
  },
  removeImage: function(){
    this.props.removeImage(this.props.index);
  },
  render: function (){

    var path = require('./../skissbilder/' + this.props.artno + '-' + this.state.angle + '.png');

    var image = {
      backgroundImage: 'url(' + path + ')',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      float: 'left',
      position: 'absolute',
      top: "430px",
      left: "400px",
    };

    return (
      <Draggable grid={[2, 2]} >
        <div style={image}>
          <img src={rotateImage} onClick={this.rotateImage} style={transformStyle} />
          <img src={trashcanImage} onClick={this.removeImage} style={transformStyle} />
          <br />
          <img src={path} style={{visibility: "hidden"}}  />
        </div>
        </Draggable>);
      }
});

module.exports = Skiss;
