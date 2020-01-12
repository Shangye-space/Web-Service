import React from 'react';
import ReactDOM from 'react-dom';
import Jumbotron from './Jumbotron.jsx';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Jumbotron />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('snapshot renders', () => {
    const component = renderer.create(<Jumbotron />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
