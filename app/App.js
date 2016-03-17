import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            entries: [],
            user: null,
            loading: true
        };

    }
    componentDidMount(){
        this.myDB = new ACCESSdb("database\\logbook-client.mdb", {showErrors:true});
        var query = this.myDB.query("SELECT * FROM entry");
        console.log(query);
    }
    render(){
        return (
            <div id="content">
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);