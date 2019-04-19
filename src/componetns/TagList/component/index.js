import React from 'react';
import TagItem from '../../TagItem/component';
import style from '../styles/TagLIst.module.scss';
import replaceSymbolsAndSpacers from '../../../Base/utils/replaceSymbolsAndSpacers';
import PropTypes from 'prop-types';


const TagList = ({ tagList }) => {
    const {allTags, min, max} = tagList;
    return (
        allTags ?  (
            <ul className={style.list}>
                {allTags.map((item) => (
                    <li key={replaceSymbolsAndSpacers(item.id)}>
                        <TagItem text={item.label} to={replaceSymbolsAndSpacers(item.id)} size={item.sentimentScore} min={min} max={max}/>
                    </li>            
                ))}
            </ul>
        ) : (
            <p>There are no tags in our list</p>
        )
    )
};

TagList.propTypes = {
    allTags: PropTypes.array
};

export default TagList;