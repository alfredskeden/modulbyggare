var React = require('react');

var Styles = {
  textAlign: 'center',
  backgroundColor: '#333',
  color: '#FFF',
  border: '1px',
  fontFamily: 'Lato,sans-serif',
  padding: '20px',
  marginTop: '0px',
};

function Header (props){
  return <h1 style={Styles}>Trademax Modulbyggare v0.7.2!</h1>;
}

module.exports = Header;
