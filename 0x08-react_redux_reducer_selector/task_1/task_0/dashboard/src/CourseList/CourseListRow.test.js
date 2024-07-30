import React from "react";
import CourseListRow from "./CourseListRow";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Course List Row component test", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<CourseListRow textFirstCell="test" />);
    
    const th = wrapper.find("th");
    // expect(th).toHaveLength(1);
    expect(th).toBe(1);
    expect(th.prop("colSpan")).toEqual(2);
    expect(th.text()).toEqual("test");

    // expect(wrapper.exists()).toBe(true);
  });

  it("should render one cell with colspan = 2 when textSecondCell null", () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell={null} />);
    const th = wrapper.find("th");
    expect(th).toHaveLength(2);
    expect(th.at(0).text()).toEqual("test");
    expect(th.at(1).text()).toEqual("text2");

    // expect(wrapper.find("tr").children()).toHaveLength(1);
    // expect(wrapper.find("tr").childAt(0).html()).toEqual('<th style="background-color:#deb5b545" colSpan="2">test</th>');
  });

  it("should render two cells when textSecondCell not null", () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="test" textSecondCell="test" />);
    const td = wrapper.find("td");
    expect(td).toHaveLength(2);
    expect(td.at(0).text()).toEqual("test");
    expext(td.at(1).text()).toEqual("test2");
  });

    // expect(wrapper.find("tr").children()).toHaveLength(2);
    // expect(wrapper.find("tr").childAt(0).html()).toEqual("<td>test</td>");
    // expect(wrapper.find("tr").childAt(1).html()).toEqual("<td>test</td>");

    it('applies rowStyle for non-header rows', () => {
      const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="test" textSecondCell="test2" />);
      const tr = wrapper.find('tr');
      expect(tr.prop('style')).toHaveProperty('backgroundColor', '#f5f5f5ab');
    });
  
    it('applies headerStyle for header rows', () => {
      const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell="test2" />);
      const tr = wrapper.find('tr');
      expect(tr.prop('style')).toHaveProperty('backgroundColor', '#deb5b545');
  });
});