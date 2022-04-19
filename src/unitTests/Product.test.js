import React from 'react';
import Product from '../components/Product';
import Enzyme, {shallow, configure} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("should render product component", () => {
    it('should render ..', () => {
        const wrapper = shallow(<Product/>)
        console.log(wrapper)
    })

})