import React from 'react';
import ReactDOM from 'react-dom';
import BestSeller from './BestSeller.jsx';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BestSeller />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('snapshot renders', () => {
    const component = renderer.create(<BestSeller />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
