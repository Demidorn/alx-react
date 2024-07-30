import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE
} from '../../../../task_1/dashboard/src/actions/courseActionTypes';
import { formJS, Map } from 'immutable';
import { coursesNormalizer } from '../schema/courses';

const initialState = formJS({
  courses: {},
  cpurseList: []
});

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      const normalizedData = coursesNormalizer(action.data);
      return state
        .set('courses', fromJS(normalizedData.entities.courses))
        .set('courseList', normalizedData.result)
      // return action.data.map((course) => ({
      //   ...course,
      //   isSelected: false
      // }));
    case SELECT_COURSE:
      return state.setIn(['courses', action.index, 'isSelected'], true);
    case UNSELECT_COURSE:
      return state.setIn(['courses', action.index, 'isSelected'], false);
    default:
      return state;
  }
};

export default courseReducer;