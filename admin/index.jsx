import React from 'react';
import { render } from 'react-dom';


class Home extends React.Component {
    render(){
        return(
        <h1>React</h1>
        );
    }
}


render(<Home />, document.getElementById("app"));