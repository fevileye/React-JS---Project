import React from 'react';
import InputForm from '../components/inputCurrencyForm.js';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('Input Form Component', () => {

    it ('matches the snapshot of Input Form', () =>{
        const tree= renderer.create(<InputForm alculateCurrency={jest.fn()}  />).toJSON();
        expect(tree).toMatchSnapshot();
    })

});