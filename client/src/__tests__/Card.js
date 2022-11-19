import React from 'react';
import Card from '../components/Card.js';
import { shallow, mount } from 'enzyme';

describe('<Card>', () => {
   it('renders ', () => {
   const wrapper = shallow(<Card description="desciption pour un test"/>);
   expect (wrapper.exists()).toBe(true);
   expect (wrapper).toMatchSnapshot();

   
   
   });

  // ...
});