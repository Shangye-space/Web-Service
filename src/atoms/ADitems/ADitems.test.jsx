import React from 'react';
import ReactDOM from 'react-dom';
import ADitems from './ADitems.jsx';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ADitems />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('snapshot renders', () => {
    const component = renderer.create(<ADitems />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
