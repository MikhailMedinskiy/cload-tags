import React from 'react';
import { connect } from 'react-redux';
import Tag from '../component';
import { history } from '../../../Base/routers/AppRouters';
import NotFoundPage from '../../../pages/NotFoundPage'

import replaceSymbolsAndSpacers from '../../../Base/utils/replaceSymbolsAndSpacers';

const TagConnected = ({tag}) => {
  if(tag){
    return(<Tag tag={tag}/>)
  } else {
    history.push('/404');
    return (
        <NotFoundPage />
    )
  }
};

const mapStateToProps = (state, props) => ({
    tag: state.tagsInfo.allTags.find((tag) => replaceSymbolsAndSpacers(tag.id) === props.urlId),
});

export default connect(mapStateToProps)(TagConnected);