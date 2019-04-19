import getTagsApi  from '../Base/api/getTagsApi';
import { GET_ALL_TAGS } from '../componetns/TagList/constants';
  
export const setTags = (Tags, min, max) => ({
  type: GET_ALL_TAGS,
  allTags: Tags,
  min,
  max
});

export const startSetTags = () => {
  return async (dispatch) => {
    const tags = await getTagsApi();
    const arraySentiment = tags.map( (tag)=>{
      return tag.sentimentScore;
    });

    const minSent = Math.min(...arraySentiment);
    const maxSent = Math.max(...arraySentiment);

    dispatch(setTags(tags, minSent, maxSent));

  };
};
