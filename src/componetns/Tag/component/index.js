import React from 'react';
import style from '../style/tag.module.scss';
import PropTypes from 'prop-types';

const Tag = (props) => {
    const {label = ''} = props.tag;
    const {neutral = 0, positive = 0, negative = 0} = props.tag.sentiment;
    let arrOfPages = Object.keys(props.tag.pageType);


    return(
        <div>
            <h1 className={style.title}>{label}</h1>
            <h3 className={style.subTitle}>Total Mentions: {neutral + positive + negative}</h3>
            <ul className={style.list}>
                <li>Positive Mentions: {neutral} </li>
                <li>Neutral Mentions: {positive}</li>
                <li>Negative Mentions: {negative}</li>
            </ul>
            <h3>List of pages:</h3>
            <ul className={style.list}>
                {arrOfPages.map((page) =>(<li key={page}>
                    {page}
                </li>))}
            </ul>
        </div>
    )
};

Tag.propTypes = {
    tag: PropTypes.shape({
        label: PropTypes.string,
        pageType: PropTypes.object,
        sentiment: PropTypes.shape({
            neutral: PropTypes.number,
            positive: PropTypes.number,
            negative: PropTypes.number
          }),
      }),
    
}
export default Tag;