import React from 'react';
import ReactDOM from 'react-dom';
import Loader from './Loader.jsx';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Loader />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('snapshot renders', () => {
    const component = renderer.create(<Loader userData={{ name: 'Test' }} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
