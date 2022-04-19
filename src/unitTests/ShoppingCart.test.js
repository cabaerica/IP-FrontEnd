import React from 'react';
import ShoppingCart from '../components/ShoppingCart.js';
import Enzyme, {shallow, configure} from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe("should render cart component", () => {
    it('should render ..', () => {
            const wrapper = shallow(<ShoppingCart/>)
            console.log(wrapper)
            const buttonElement  = wrapper.find('#button-test');
            expect(buttonElement).toHaveLength(1);
            expect(buttonElement.text()).toEqual('Search');
        })
})
