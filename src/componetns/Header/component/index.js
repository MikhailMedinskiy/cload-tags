import React from 'react';
import { headerText } from '../constant'
import style from '../styles/header.module.scss'

export default () => (
    <header className={style.header}>{headerText}</header>
)