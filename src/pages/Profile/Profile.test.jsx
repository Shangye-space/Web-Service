import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Profile from './Profile.jsx';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Profile />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('snapshot renders', () => {
    const component = renderer.create(<Profile />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
