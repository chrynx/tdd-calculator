
# TDD
	Write a failing test
	Make it work
	Refactor

# Snapshot Testing
	Done after testing

# TDD Steps

#### we need to import react to be able to render the component during the test
	import React from 'react';
#### importing enzyme allows us to render the component and use methods on it
	import { shallow } from 'enzyme';
#### we need to import the component to be used on the tests
	import App from './App';

#### describe - groups our tests to make it more manageable
	describe('App', () => {

#### it - allows us to run a test
		it('Should render a div', () => {

#### we create a copy of the component using enzyme's shallow function
			const wrapper = shallow(<App />);

#### component.find('element') - allows us to find all elements within the component, useful for finding right amount of inputs, buttons, etc...
			expect(wrapper.find('div').length).toEqual(1);
		});
	});