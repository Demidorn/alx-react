import { shallow } from "enzyme";
import React from "react";
import Login from "./Login";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Header", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("should have 2 input tags and 2 label tags", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("label")).toHaveLength(2);
    expect(wrapper.find("input")).toHaveLength(2);
  });

  it("should have a submit button", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("input[type='submit']")).toHaveLength(1);
  });

  it('should have submit button disabled by default', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(true);
  });

  it('should enable submit button when email and password are not empty', () => {
    const wrapper = shallow(<Login />);
    wrapper.find('input#email').simulate('change', { target: { value: 'test@example.com' } });
    wrapper.find('input#password').simulate('change', { target: { value: 'password123' } });
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(false);
  });

  it('should call handleLoginSubmit when form is submitted', () => {
    const wrapper = shallow(<Login />);
    const instance = wrapper.instance();
    jest.spyOn(instance, 'handleLoginSubmit');
    wrapper.update();
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(instance.handleLoginSubmit).toHaveBeenCalled();
  });

  it('should update state when email and password fields are changed', () => {
    const wrapper = shallow(<Login />);
    wrapper.find('input#email').simulate('change', { target: { value: 'test@example.com' } });
    wrapper.find('input#password').simulate('change', { target: { value: 'password123' } });
    expect(wrapper.state('email')).toBe('test@example.com');
    expect(wrapper.state('password')).toBe('password123');
  });

  it('should disable submit button when one of the input fields is empty', () => {
    const wrapper = shallow(<Login />);
    wrapper.find('input#email').simulate('change', { target: { value: 'test@example.com' } });
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(true);
    wrapper.find('input#password').simulate('change', { target: { value: 'password123' } });
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(false);
    wrapper.find('input#password').simulate('change', { target: { value: '' } });
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(true);
  });
});
