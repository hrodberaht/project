import React from 'react';

function all(){
    alert(2+2);
}

 class IndexPage extends React.Component {
    render(){
        return(
            <div>
                <button onClick={ ()=>all()}>Hej</button>
                <h1>React</h1>
            </div>
        );
    }
}

export default IndexPage;