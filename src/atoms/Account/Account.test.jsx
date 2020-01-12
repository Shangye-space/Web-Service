import React from 'react';
import ReactDOM from 'react-dom';
import Account from './Account.jsx';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Account userData={{ name: 'Test' }} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('snapshot renders', () => {
    const component = renderer.create(<Account userData={{ name: 'Test' }} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
