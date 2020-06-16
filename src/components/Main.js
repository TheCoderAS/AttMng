import React,{Component } from 'react';
import {Header} from './Header';
import Footer from './Footer';
import Back from './Back';
import Body from './Body';
import {Switch, Route, Redirect,withRouter} from 'react-router-dom';
import Help from './Help';
import Contact from './Contact';
import About from './About';

class Main extends Component{

  render(){
    return(
      <div>
        <Back/>
        <Header/>
        <Switch>
          <Route path="/" component={Body}/>
          <Route exact path="/help" component={Help}/>
          <Route exact path="/aboutus" component={About}/>
          <Route exact path="/contactus" component={Contact}/> 
          <Redirect to="/"/>         
        </Switch>
        <Footer/>
      </div>
    );
  };
}
export default Main;