import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
class App extends React.Component {
    render(){
        let txt=this.props.txt;
        return (
            <div>Hello World!</div>
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