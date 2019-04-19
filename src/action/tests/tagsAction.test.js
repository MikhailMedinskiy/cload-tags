import { GET_ALL_TAGS } from '../../componetns/TagList/constants';
import {setTags} from '../index.js'


const action = setTags( ['test'],  3,  5);

test('should sava data', () => {

    expect(action).toEqual({
        type: GET_ALL_TAGS,
        allTags: ['test'],
        max: 5,
        min: 3
    });
});

const sum = (a, b) => a + b;

it('sums numbers', () => {
    expect(sum(1, 2)).toEqual(3);
    expect(sum(2, 2)).toEqual(4);
});
