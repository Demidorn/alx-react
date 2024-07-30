import { selectCourse, unSelectCourse } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes"; 

describe ("courseActionCreators", () => {
  it (" should return right action payload and type when selectCourse is called", () => {
    const index = 1;
    const result = selectCourse(index);
    expect(result).toEqual({ type: SELECT_COURSE, index });
  });
  it("should return right action payload and type when unSelectCourse is called", () => {
    const index = 1;
    const result = unSelectCourse(index);
    expect(result).toEqual({ type: UNSELECT_COURSE, index });
  });
});