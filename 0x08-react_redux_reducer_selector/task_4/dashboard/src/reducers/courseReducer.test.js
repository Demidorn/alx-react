// courseReducer.test.js
import { fromJS } from 'immutable';
import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

describe('courseReducer', () => {
  const initialState = fromJS({
    courses: {},
    courseList: []
  });

  it('should return the initial state', () => {
    expect(courseReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_COURSE_SUCCESS', () => {
    const data = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data
    };
    const expectedState = fromJS({
      courses: {
        1: { id: 1, name: 'ES6', credit: 60, isSelected: false },
        2: { id: 2, name: 'Webpack', credit: 20, isSelected: false },
        3: { id: 3, name: 'React', credit: 40, isSelected: false }
      },
      courseList: [1, 2, 3]
    });
    expect(courseReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle SELECT_COURSE', () => {
    const state = fromJS({
      courses: {
        1: { id: 1, name: 'ES6', credit: 60, isSelected: false },
        2: { id: 2, name: 'Webpack', credit: 20, isSelected: false },
        3: { id: 3, name: 'React', credit: 40, isSelected: false }
      },
      courseList: [1, 2, 3]
    });
    const action = {
      type: SELECT_COURSE,
      index: 2
    };
    const expectedState = fromJS({
      courses: {
        1: { id: 1, name: 'ES6', credit: 60, isSelected: false },
        2: { id: 2, name: 'Webpack', credit: 20, isSelected: true },
        3: { id: 3, name: 'React', credit: 40, isSelected: false }
      },
      courseList: [1, 2, 3]
    });
  });
});

