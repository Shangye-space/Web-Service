import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

import ItemCard from './ItemCard.jsx';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Router>
            <ItemCard />
        </Router>,
        div,
    );
    ReactDOM.unmountComponentAtNode(div);
});

it('snapshot renders', () => {
    const component = renderer.create(
        <Router>
            <ItemCard />
        </Router>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
