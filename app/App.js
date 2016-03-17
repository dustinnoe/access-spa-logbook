import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'

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
    }
    render(){
        return (
            <div id="content">
                    {this.props.children}
            </div>
        )
    }
}

ReactDOM.render((
    <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
    </Router>
), document.getElementById('app'));