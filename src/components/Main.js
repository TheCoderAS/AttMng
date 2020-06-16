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
          <Route path="/AttMng" component={Body}/>
          <Route exact path="/AttMng/help" component={Help}/>
          <Route exact path="/AttMng/aboutus" component={About}/>
          <Route exact path="/AttMng/contactus" component={Contact}/> 
          <Redirect to="/AttMng"/>         
        </Switch>
        <Footer/>
      </div>
    );
  };
}
export default Main;