var React = require('react');
var trallImage = require('./../images/trall.png');

var Styles = {
  fontFamily: 'Lato,sans-serif',
};

var StylesInput = {
  marginBottom: '5px',
  fontFamily: 'Lato,sans-serif',
};

var widthPadeo = 0;
var heightPadeo = 0;

function Padeo (props) {

  if(props.widthInput != "" && props.widthInput > 30 && props.widthInput <= 1000){
    widthPadeo = props.widthInput*2;
  }
  else {
    widthPadeo = 30*2;
  }

  if(props.heightInput != "" && props.heightInput > 30 && props.heightInput <= 1000){
    heightPadeo = props.heightInput*2;
  }
  else {
    heightPadeo = 30*2;
  }

  return (
    <div>
    <span style={Styles} >Här kan du skriva mått på din uteplats:</span>
    <br />

    <input type="number" onChange={props.onHandleInputWidthChange} value={props.widthInput} name="Width" style={StylesInput} placeholder="Bredd cm"/>
    <br />
    <input type="number" onChange={props.onHandleInputHeightChange} value={props.heigthInput} name="height" style={StylesInput} placeholder="Höjd cm" />


      <div src={trallImage}
        style={{width: widthPadeo,
          height: heightPadeo,
          marginLeft: "40px",
          backgroundRepeat: "repeat",
          backgroundImage: "url(" + trallImage +")",
          float: "center",
        }}
        >
        <img src={trallImage} style={{visibility: "hidden", width: widthPadeo, height: heightPadeo,}}  />
    </div>
      </div>

);
}

module.exports = Padeo;
