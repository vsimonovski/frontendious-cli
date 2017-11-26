import React, { Component } from 'react';
import { render } from 'react-dom';
import './css_modules';

class App extends Component {
    render() {
        return <div>helllo world</div>;
    }
}

render(<App />, document.getElementById('app'));
