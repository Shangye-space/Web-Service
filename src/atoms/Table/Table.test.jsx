import React from 'react';
import ReactDOM from 'react-dom';
import Table from './Table.jsx';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Table />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('snapshot renders', () => {
    const component = renderer.create(<Table userData={{ name: 'Test' }} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
