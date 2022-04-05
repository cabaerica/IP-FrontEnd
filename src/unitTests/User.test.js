import Enzyme, { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react'
import User from '../components/User'
Enzyme.configure({ adapter: new Adapter() });

describe("should render ,..", () => {
    it('should render ..', () => {
        const wrapper = shallow(<User/>)
        const buttonElement  = wrapper.find('#button-test');
        expect(buttonElement).toHaveLength(1);
        expect(buttonElement.text()).toEqual('Search');
    })
    /**
    it('should render User', () => {
        shallow(<User/>)
    }) */
})

  /** 
  describe("ComponentName", () => {
    it("should render my component", () => {
      const wrapper = shallow(<ComponentName />);
    });
  });*/