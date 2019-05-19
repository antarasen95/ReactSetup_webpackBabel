import React from 'react';
import ReactDOM from 'react-dom';

function Welcome(props) {
    return <h2> Hello, {props.name}</h2>;
}

function App() {
    return (
        <div>
            <Welcome name="sara" />
            <Welcome name="rahul" />
            <Welcome name="ramesh" />
        </div>
    )
}

const element = <Welcome name="sara" />;

ReactDOM.render(
  <App />,
  document.getElementById('app')
);