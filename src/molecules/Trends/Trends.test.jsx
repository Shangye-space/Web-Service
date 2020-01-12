import React from 'react';
import ReactDOM from 'react-dom';
import Trends from './Trends.jsx';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Trends />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('snapshot renders', () => {
    const component = renderer.create(<Trends />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
