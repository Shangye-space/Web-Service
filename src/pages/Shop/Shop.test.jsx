import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Shop from './Shop.jsx';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Shop />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('snapshot renders', () => {
    const component = renderer.create(<Shop />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
