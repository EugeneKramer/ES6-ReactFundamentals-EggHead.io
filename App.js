import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component{
    constructor() {
        super();
        this.state={data:[
            {id:1, name:"A1"},
            {id:2, name:"A2"}
        ]}
    }
    render(){
        let rows = this.state.data.map(person => {
            return <PersonRow data={person} key={person.id} data={person}/>
        });
        return (
            <table>
                <tbody>{rows}</tbody>
            </table>
        )
    }
}

const PersonRow = (props) => {
    "use strict";
    return (
        <tr>
            <td>{props.data.id}</td>
            <td>{props.data.name}</td>
        </tr>
    )
}


$(function() {
    ReactDOM.render(
        <App txt="stuff"/>,
        document.getElementById('app')
    )
});

const Thing2 = () => <div><h1>Hello</h1></div>
export default App;