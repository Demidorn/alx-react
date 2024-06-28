import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  it('should render without crashing', () => {
    shallow(<App />);
  });

  it('should render a div with the class App-header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-header').exists()).toBe(true);
  });

  it('should render a div with the class App-body', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-body').exists()).toBe(true);
  });

  it('should render a div with the class App-footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-footer').exists()).toBe(true);
  });
});
