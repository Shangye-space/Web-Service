import React from 'react';
import ReactDOM from 'react-dom';
import AdminRouter from './AdminRouter.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Router>
            <AdminRouter />
        </Router>,
        div,
    );
    ReactDOM.unmountComponentAtNode(div);
});

it('snapshot renders', () => {
    const component = renderer.create(
        <Router>
            <AdminRouter />
        </Router>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
