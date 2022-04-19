import React from 'react';
import SingleProduct from '../components/SingleProduct';
import Enzyme, {shallow, configure} from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe("should render product component", () => {
    it('should render ..', () => {
        const wrapper = shallow(<SingleProduct/>)
        console.log(wrapper)
    })
})
