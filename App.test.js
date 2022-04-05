import React from 'react';
import App from '../App';
import Enzyme, {shallow, configure} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("should render app component", () => {
    it('should render ..', () => {
        const wrapper = shallow(<App/>)
        console.log(wrapper)
    })

})