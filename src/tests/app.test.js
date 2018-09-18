import React from 'react';
import App from '../app.js';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('App Component', () => {
    it('Current Currency Start with 1', () => {
        const wrapper = shallow(<App />)
        const currentCurrencyState= wrapper.state().currentCurrency;
        expect(currentCurrencyState).toEqual(1);
    });

    it('Selected Rate Start With IDR,EUR,GBP,SGD', () => {
        const wrapper = shallow(<App />)
        const selectedRate= wrapper.state().selectedRate;
        expect(selectedRate).toEqual(['IDR','EUR','GBP','SGD']);
    });

    it('Available List Down IDR,EUR,GBP,SGD', () => {
        const wrapper = shallow(<App />)
        const availableListDown= wrapper.state().availableListDown;
        expect(availableListDown).toEqual(['-- Select --','CAD','GBP','CHF','SGD','INR','MYR','JPY','KRW','EUR','IDR']);
    });

    it ('matches the snapshot of App', () =>{
        const tree= renderer.create(<App />).toJSON();

        expect(tree).toMatchSnapshot();
    })

});