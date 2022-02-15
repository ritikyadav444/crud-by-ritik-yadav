import NavBar from "./Component/NavBar";
import HelloJerry from "./Component/HelloJerry";
import AlUsers from "./Component/AlUsers";
import Add from "./Component/Add";
import Edit from "./Component/Edit";
import NotFound from "./Component/NotFound";
import { BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom'

function App() {
    return ( 
    <Router >
        <NavBar/>
        <Switch>
        <Route exact path = "/" component = { HelloJerry }/>
        <Route exact path = "/u" component = { AlUsers }/> 
        <Route exact path = "/a" component = { Add }/>
        <Route exact path = "/e/:id" component = { Edit }/>
        <Route exact path='/404' component={NotFound} />
        <Redirect from='*' to='/404' />
        </Switch>
        </Router>
    );
}

export default App;