import React from 'react';
import ReactDOM from 'react-dom';
import Intro from './Intro.jsx';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Intro />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('snapshot renders', () => {
    const component = renderer.create(<Intro />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
