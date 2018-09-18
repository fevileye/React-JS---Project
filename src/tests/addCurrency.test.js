import React from 'react';
import AddCurrency from '../components/addCurrency.js';
import renderer from 'react-test-renderer';

describe('Add Currency Component', () => {

    it ('matches the snapshot of Add Currency', () =>{
        const tree= renderer.create(<AddCurrency addCurrency={jest.fn()} availableListDown={['-- Select --','CAD','GBP','CHF','SGD','INR','MYR','JPY','KRW','EUR','IDR']}/>).toJSON();
        expect(tree).toMatchSnapshot();
    })

});