import React from 'react';
import Currency from '../components/currency.js';
import renderer from 'react-test-renderer';

describe('App Component', () => {
    it ('matches the snapshot of Currency', () =>{
        const tree= renderer.create(<Currency key={1} selectedRate={[{calculatedRate:14866.9951160997,currency:"IDR",rate:14866.9951160997}]} setPopUp={jest.fn()}/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
});