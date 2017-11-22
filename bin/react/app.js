import React, { Component } from 'react';
import { render } from 'react-dom';
import './css_modules';

class Home extends Component {
    render() {
        return <div>hello</div>;
    }
}

render(<Home />, document.getElementById('app'));