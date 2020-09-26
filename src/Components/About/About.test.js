import React from 'react'
import Profile from './About';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Profile', () => {

  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<Profile/>)
  });

  it('contains header with name of component', () => {
    expect(wrapper.find('h1').text()).toBe("About")
  });
});