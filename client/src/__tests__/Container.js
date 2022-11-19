import React from 'react';
import Container from '../components/Container.js';
import { shallow, mount } from 'enzyme';

describe('<Container>', () => {
   it('renders ', () => {
   const wrapper = shallow(<Container description="desciption pour un test"/>);
   expect (wrapper.exists()).toBe(true);
   expect (wrapper).toMatchSnapshot();

   
   
   });

  // ...
});