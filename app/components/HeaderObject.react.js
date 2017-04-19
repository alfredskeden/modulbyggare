var React = require('react');

function HeaderObject (props){
    return (<span>{props.namn}{props.artno > 0 && " - " + props.artno}</span>)
}

module.exports = HeaderObject;
