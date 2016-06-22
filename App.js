import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

let Mixin = InnerComponent => class extends React.Component{
    constructor(){
        super();
        this.update=this.update.bind(this);
        this.state = {val:0};
        console.log("constructing");
    }
    update(){
        this.setState({val:this.state.val +1})
    }
    render(){
        return (
            <InnerComponent
                update={this.update}
                {...this.state}
                {...this.props} />
        )
    }
    componentWillMount() {
        console.log("going to mount");
    }
}

const Button = (props) =>(
    <button
        onClick={props.update}>
        {props.txt} - {props.val}
        </button>
)

const Label = (props) =>(
    <button
        onMouseMove ={props.update}>
        {props.txt} - {props.val}
    </button>
)


let ButtonMixed = Mixin(Button);
let LabelMixed=Mixin(Label);

class App extends React.Component {

    render() {
        console.log("rrefnderijng");
        //console.log(this.state.increasing);
        return (
            <div>
                <ButtonMixed txt="Button"/>
                <LabelMixed txt="Label"/>
            </div>
        );
    }
}

//App.defaultProps = {val:0}

$(function() {
    ReactDOM.render(
        <App txt="stuff"/>,
        document.getElementById('app')
    )
});

const Thing2 = () => <div><h1>Hello</h1></div>
export default App;