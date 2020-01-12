import React from 'react';
import ReactDOM from 'react-dom';
import Basic from './Basic.jsx';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Basic />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('snapshot renders', () => {
    const component = renderer.create(<Basic />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
