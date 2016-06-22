import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
    constructor(){
        super();
        this.update=this.update.bind(this);
        this.state = {increasing:0};
        console.log("constructing");
    }
    update(){
        console.log("update");
        console.log(this.props.val);

        ReactDOM.render(
            <App val={this.props.val+1}/>,
            document.getElementById('app')
        );
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({increasing:nextProps.val > this.props.val})
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.val % 5 === 0;
    }


    render() {
        console.log("rrefnderijng");
        console.log(this.state.increasing);
        return (
            <button onClick={this.update}>
                {this.props.val}
            </button>
        );
    }
}

App.defaultProps = {val:0}

$(function() {
    ReactDOM.render(
        <App txt="stuff"/>,
        document.getElementById('app')
    )
});

const Thing2 = () => <div><h1>Hello</h1></div>
export default App;