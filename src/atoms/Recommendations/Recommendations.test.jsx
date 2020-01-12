import React from 'react';
import ReactDOM from 'react-dom';
import Recommendations from './Recommendations.jsx';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Recommendations />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('snapshot renders', () => {
    const component = renderer.create(
        <Recommendations userData={{ name: 'Test' }} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
