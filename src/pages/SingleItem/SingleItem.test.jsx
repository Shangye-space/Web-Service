import React from 'react';
import ReactDOM from 'react-dom';
import SingleItem from './SingleItem.jsx';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SingleItem />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('snapshot renders', () => {
    const component = renderer.create(<SingleItem />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
