var React = require('react');

var Styles = {
  textAlign: 'center',
  backgroundColor: '#333',
  color: '#FFF',
  border: '1px',
  fontFamily: 'Lato,sans-serif',
  padding: '20px',
};

function Header (props){
  return <h1 style={Styles}>Trademax Modulbyggare v0.6!</h1>;
}

module.exports = Header;
