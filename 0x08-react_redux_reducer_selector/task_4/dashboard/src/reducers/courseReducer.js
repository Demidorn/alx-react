import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE
} from '../../../../task_1/dashboard/src/actions/courseActionTypes';

const initialState = [];

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      return action.data.map((course) => ({
        ...course,
        isSelected: false
      }));
    case SELECT_COURSE:
      return state.map((course) => {
        if (course.id === action.index) {
          return { ...course, isSelected: true };
        }
        return { ...course, isSelected: false };
      });
    case UNSELECT_COURSE:
      return state.map(course =>
        course.id === action.index
        ? { ...course, isSelected: false }
        : course
      );
    default:
      return state;
  }
};

export default courseReducer;