import React from 'react';
import CurrencyList from '../components/currencyList.js';
import renderer from 'react-test-renderer';

describe('App Component', () => {
    
    it ('matches the snapshot of CurrencyList', () =>{
        const tree= renderer.create(<CurrencyList selectedRates={[{calculatedRate:14866.9951160997,currency:"IDR",rate:14866.9951160997}]} setPopUp={jest.fn()} />).toJSON();
        expect(tree).toMatchSnapshot();
    })

});