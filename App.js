import React from 'react';
import ReactDOM from 'react-dom';
//require('bootstrap/css/bootstrap.css');
import $ from 'jquery';


class App extends React.Component {
    render() {
        return (
            <Button>I <Heart/> React</Button>
        );
    }
}

class Button extends React.Component{
    render(){
        return <button>{this.props.children}</button>
    }
}

const Heart = ()=> <span className="glyphicon glyphicon-heart">H</span>


$(function() {
    ReactDOM.render(
        <App txt="stuff"/>,
        document.getElementById('app')
    )
});

const Thing2 = () => <div><h1>Hello</h1></div>
export default App;