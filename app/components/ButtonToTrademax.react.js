var React = require('react');

var trademaxURL = "https://www.trademax.se/";

var styles =
{
  position: "absolute",
  left: "80%",
  top: "80%",
}

function ButtonToTrademax (props){
  if(props.href == '#'){
    return (<a style={styles} href="#" role="button" className="btn btn-danger">Ingen grupp skapad</a>);
  }
  else if(props.href == 'inget_fanns'){
    return (<a style={styles} href="#" role="button" className="btn btn-warning">Hittade ingen grupp</a>);
  }
  else {
    return (<a style={styles} href={trademaxURL + props.href} role="button" className="btn btn-success">Såhär skulle din grupp kunna se ut</a>);
  }
};

module.exports = ButtonToTrademax;
