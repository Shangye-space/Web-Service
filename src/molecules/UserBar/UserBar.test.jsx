import React from 'react';
import ReactDOM from 'react-dom';
import UserBar from './UserBar.jsx';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UserBar userData={{ name: 'Test' }} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('snapshot renders', () => {
    const component = renderer.create(<UserBar userData={{ name: 'Test' }} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
