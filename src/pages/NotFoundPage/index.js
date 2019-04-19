import React from 'react'
import {Link} from 'react-router-dom';
import MainBody from "../../componetns/MainBody";

export default () => (
    <MainBody>
        <p>Something goes wrong and this page doesn's exist.<br/> Use this <Link to="/">LINK</Link> go to home</p>
    </MainBody>
)