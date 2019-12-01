import React,{Component} from 'react';
import MenuContainer from './MenuContainer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class MainContainer extends Component {
    render() {
      return (
        <MenuContainer />
      )
    }
}

export default MainContainer;
// <Router>
//   <React.Fragment>
//     <Switch>
//       <Route path="/game" render={(props) =>{
//           return <MenuContainer />
//       }}/>
//     </Switch>
//   </React.Fragment>
// </Router>
