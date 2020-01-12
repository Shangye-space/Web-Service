import React from 'react';
import ReactDOM from 'react-dom';
import TableRow from './TableRow.jsx';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TableRow in_sale={true} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('snapshot renders', () => {
    const component = renderer.create(<TableRow in_sale={true} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
