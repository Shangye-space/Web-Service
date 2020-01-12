import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header.jsx';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Router>
            <Header userData={{ name: 'Test' }} />
        </Router>,
        div,
    );
    ReactDOM.unmountComponentAtNode(div);
});

it('snapshot renders', () => {
    const component = renderer.create(
        <Router>
            <Header userData={{ name: 'Test' }} />
        </Router>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
