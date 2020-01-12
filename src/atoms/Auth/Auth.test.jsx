import React from 'react';
import ReactDOM from 'react-dom';
import Auth from './Auth.jsx';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Auth />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('snapshot renders', () => {
    const component = renderer.create(<Auth />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
