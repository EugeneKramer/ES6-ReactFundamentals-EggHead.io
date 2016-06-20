import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


class App extends React.Component {
    constructor(){
        super();
        this.state={val:0};
        this.update=this.update.bind(this);
    }
    update(){
        this.setState({val: this.state.val + 1})
    }
    componentWillMount(){
        console.log("mounting");
    }

    componentDidMount(){
        console.log("mounted");
    }
    compnentWillUnmount(){
        console.log("unmounting");
    }

    render() {
        console.log("rendering");
        return (
            <button onClick={this.update}>
                {this.state.val}
            </button>
        );
    }
}

class Wrapper extends React.Component {
    constructor() {
        super();
    }

    mount() {
        ReactDOM.render(<App/>, document.getElementById('a'))
    }

    unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('a'));
    }

    render() {
        return (
            <div>
                <button onClick={this.mount.bind(this)}>Mount</button>
                <button onClick={this.unmount.bind(this)}>UnMount</button>
                <div id="a"></div>
            </div>
        )
    }
}

$(function() {
    ReactDOM.render(
        <Wrapper txt="stuff"/>,
        document.getElementById('app')
    )
});

const Thing2 = () => <div><h1>Hello</h1></div>
export default Wrapper;