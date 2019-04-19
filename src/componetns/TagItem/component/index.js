import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const TagItem = ({text, to, size, min, max}) => {

    const minFontSize = 1;
    const maxFontSize = 3;

    let fontSize = size / (max - min) + minFontSize;
    const styleTag = {
        fontSize: fontSize > maxFontSize ? maxFontSize + 'em' :  fontSize + 'em'
    };

    return(
        <Link to={`tag/${to}`} style={styleTag}>{text}</Link>
    )
};

TagItem.propTypes = {
    text: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired
};


export default TagItem