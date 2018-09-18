import React from 'react';
import AddButton from '../components/addButton.js';
import renderer from 'react-test-renderer';

describe('Add Button Component', () => {
    it ('matches the snapshot of AddButton', () =>{
        const tree= renderer.create(<AddButton />).toJSON();
        expect(tree).toMatchSnapshot();
    })
});