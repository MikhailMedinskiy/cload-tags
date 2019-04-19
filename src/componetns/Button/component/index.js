import React from 'react';
import PropTypes from 'prop-types';
import style from '../styles/button.module.scss';

const Button = (props) => (
    <button 
        className={style.button}
        onClick={props.handle}>
        {props.text}    
    </button>
);

Button.propTypes = {
    handle: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
};

export default Button;