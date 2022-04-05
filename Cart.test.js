import React from 'react';
import Cart from '../components/Cart';
import Enzyme, {shallow, configure} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("should render cart component", () => {
    it('should render ..', () => {
        const wrapper = shallow(<Cart/>)
        console.log(wrapper)
    })

})