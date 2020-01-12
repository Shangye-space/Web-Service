import React from 'react';
import ReactDOM from 'react-dom';
import Store from './Store.jsx';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Store />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('snapshot renders', () => {
    const component = renderer.create(<Store />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
