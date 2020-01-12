import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './Landing.jsx';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Landing />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('snapshot renders', () => {
    const component = renderer.create(<Landing />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
