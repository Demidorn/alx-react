// courseReducer.test.js
import courseReducer from './courseReducer';
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE
} from '../actions/courseActionTypes';

describe('courseReducer', () => {
  // Test default state
  it('should return the initial state', () => {
    expect(courseReducer(undefined, {})).toEqual([]);
  });

  // Test FETCH_COURSE_SUCCESS action
  it('should handle FETCH_COURSE_SUCCESS', () => {
    const data = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 }
    ];
    const expectedState = data.map(course => ({
      ...course,
      isSelected: false
    }));
    expect(courseReducer([], {
      type: FETCH_COURSE_SUCCESS,
      data
    })).toEqual(expectedState);
  });

  // Test SELECT_COURSE action
  it('should handle SELECT_COURSE', () => {
    const initialState = [
      { id: 1, name: "ES6", isSelected: false, credit: 60 },
      { id: 2, name: "Webpack", isSelected: false, credit: 20 },
      { id: 3, name: "React", isSelected: false, credit: 40 }
    ];
    const expectedState = [
      { id: 1, name: "ES6", isSelected: false, credit: 60 },
      { id: 2, name: "Webpack", isSelected: true, credit: 20 },
      { id: 3, name: "React", isSelected: false, credit: 40 }
    ];
    expect(courseReducer(initialState, {
      type: SELECT_COURSE,
      index: 2
    })).toEqual(expectedState);
  });

  // Test UNSELECT_COURSE action
  it('should handle UNSELECT_COURSE', () => {
    const initialState = [
      { id: 1, name: "ES6", isSelected: false, credit: 60 },
      { id: 2, name: "Webpack", isSelected: true, credit: 20 },
      { id: 3, name: "React", isSelected: false, credit: 40 }
    ];
    const expectedState = [
      { id: 1, name: "ES6", isSelected: false, credit: 60 },
      { id: 2, name: "Webpack", isSelected: false, credit: 20 },
      { id: 3, name: "React", isSelected: false, credit: 40 }
    ];
    expect(courseReducer(initialState, {
      type: UNSELECT_COURSE,
      index: 2
    })).toEqual(expectedState);
  });
});
