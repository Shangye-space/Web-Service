import React from 'react';
import ReactDOM from 'react-dom';
import AdminRouter from './AdminRouter.jsx';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AdminRouter />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('snapshot renders', () => {
    const component = renderer.create(<AdminRouter />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
