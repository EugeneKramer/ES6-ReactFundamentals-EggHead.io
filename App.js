import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
    constructor() {
        super();
        this.state ={
            input: '/*add jsx here */',
            output: "",
            err: ""
        }
        this.update=this.update.bind(this);
    }

    update(e){
        let code = e.target.value;
        try{
            this.setState({
                output:babel.transform(code,{
                    stage:0,
                    loose:'all'
                }).code
            })
        }
        catch(err){
            this.setState({err:err.message});
        }
    }

    render(){
        return (
            <div>
                <header>{this.state.err}</header>
                <dv className="container">
                    <textarea
                        onChange={this.update}
                        defaultValue={this.state.input}>
                        </textarea>
                    <pre>{this.state.output}</pre>
                </dv>
            </div>
        )
    }
}

$(function() {
    ReactDOM.render(
        <App txt="stuff"/>,
        document.getElementById('app')
    )
});

const Thing2 = () => <div><h1>Hello</h1></div>
export default App;