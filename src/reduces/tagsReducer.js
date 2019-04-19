import { GET_ALL_TAGS } from '../componetns/TagList/constants';

const defaultUserState = {
    allTags: [],
    min: 1,
    max: 1,
};

export default (state = defaultUserState, action) => {
    const {allTags, min, max} = action;
    switch (action.type) {
      case GET_ALL_TAGS: {
        return Object.assign({}, state, {
            allTags,
            min,
            max

        });
      }
      default:
        return state;
    }
};
  