import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
class App extends React.Component {
    constructor(){
        super();
        this.state={txt:""}
        this.update = this.update.bind(this);
    }
    update(e){
        this.setState({txt:e.target.value});
    }

    render(){
        return (
            <div>
                <Widget txt={this.state.txt}
                        update={this.update} />
                <Widget txt={this.state.txt}
                        update={this.update} />
                <Widget txt={this.state.txt}
                        update={this.update} />
                <Widget txt={this.state.txt}
                        update={this.update} />
            </div>
        );
    }
}
$(function() {
    ReactDOM.render(
        <App txt="stuff"/>,
        document.getElementById('app')
    )
});

const Widget = (props) => {
    "use strict";
    return (
        <div>
            <input type="text"
                   onChange={props.update}/>
            <h1>{props.txt}</h1>
        </div>
    )
}

const Thing2 = () => <div><h1>Hello</h1></div>
export default App;