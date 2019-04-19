import React from 'react';
import TagList from '../component';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const TagListConnected = ({ allTags }) => <TagList tagList={allTags}/>;

const mapStateToProps = state => ({
    allTags: state.tagsInfo,
});

TagListConnected.propTypes = {
    allTags: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(TagListConnected);