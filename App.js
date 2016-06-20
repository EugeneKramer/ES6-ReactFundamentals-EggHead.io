import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
class App extends React.Component {

    constructor(){
        super();
        this.state={
            txt:"this is a state",
            cat:0
        }
    }
    update(e){
        this.setState({txt:e.target.value});
    }

    render(){
        //let txt=this.props.txt;
        return (
            <div>
                <input type="text"
                       onChange={this.update.bind(this)}/>
                <h1>{this.state.txt}</h1>
            </div>
        );
    }
}

App.propTypes={
    txt:React.PropTypes.string,
    cat:React.PropTypes.number.isRequired
}

App.defaultProps={
    txt:'this is the default txt',
    cat:5
}
ReactDOM.render(
    <App txt="stuff"/>,
    document.getElementById('app')
)



const Thing2 = () => <div><h1>Hello</h1></div>
export default App;