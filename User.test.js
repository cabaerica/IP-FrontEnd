<<<<<<< HEAD
import React from 'react';
import User from '../components/User';
import Enzyme, {shallow, configure} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
=======

import React from 'react';
import User from '../components/User';
import {shallow} from "enzyme";

>>>>>>> 42c6849a04bec9fd1bada0487a21f389592df518


describe("should render user component", () => {
    it('should render ..', () => {
        const wrapper = shallow(<User/>)
        console.log(wrapper)
        const buttonElement  = wrapper.find('#button-test');
        expect(buttonElement).toHaveLength(1);
        expect(buttonElement.text()).toEqual('Search');
    })

})