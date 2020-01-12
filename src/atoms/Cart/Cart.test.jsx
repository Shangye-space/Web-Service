import React from 'react';
import ReactDOM from 'react-dom';
import Cart from './Cart.jsx';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Cart />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('snapshot renders', () => {
    const component = renderer.create(<Cart />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
