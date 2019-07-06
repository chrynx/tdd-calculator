import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App/App';
import Calculator from '../components/Calculator/Calculator';

describe('App', () => {

	let wrapper;
	beforeEach(() => wrapper = shallow(<App />));

	it('should render correctly' , () => expect(wrapper).toMatchSnapshot());

	it('Should render a <div />', () => {
		expect( wrapper.find('div').length).toEqual(1);
	});

	it('should render the Calculator Component', () => {
		expect(wrapper.containsMatchingElement(<Calculator />)).toEqual(true);
	});
})