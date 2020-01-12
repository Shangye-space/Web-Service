import React from 'react';
import ReactDOM from 'react-dom';
import OneItem from './OneItem.jsx';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<OneItem />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('snapshot renders', () => {
    const component = renderer.create(<OneItem />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
