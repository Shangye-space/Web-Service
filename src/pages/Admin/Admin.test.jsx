import React from 'react';
import ReactDOM from 'react-dom';
import Admin from './Admin.jsx';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Admin />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('snapshot renders', () => {
    const component = renderer.create(<Admin />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
