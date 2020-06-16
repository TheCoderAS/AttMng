import React,{Component} from 'react';
import {Nav,Navbar,NavbarBrand,Jumbotron,Row,Col,NavItem,Button,Collapse,NavbarToggler,Modal,ModalHeader,ModalBody,ModalFooter,Form,FormGroup,Input,Label} from 'reactstrap';
import {NavLink,Link} from 'react-router-dom';

class Login extends Component{
  constructor(props){
    super(props);
    this.state={
      isModalOpen:false
    };
    this.toggleModal=this.toggleModal.bind(this);
  }
  toggleModal(){
    this.setState({
      isModalOpen:!this.state.isModalOpen
    });
  }
  render(){
    return(
      <div>
        <Link id="log"><h6 onClick={this.toggleModal}><span className="fa fa-sign-in"></span> &nbsp;<strong>Login</strong></h6></Link>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader className="modal-header" toggle={this.toggleModal}>
              Login
          </ModalHeader>
          <ModalBody className="modal-body modal-lg">
            <div className="container login-form">
              <Form onSubmit={this.handleLogin}>
                <FormGroup row>
                  <Col sm={6}><Input type="text" id="inputroll" name="inputroll" innerRef={(input)=>this.inputroll=input} placeholder="Enter Roll No."/></Col>
                  <Col sm={6}><Input type="password" id="inputpass" name="inputpass" innerRef={(input)=>this.inputroll=input} placeholder="Enter Password"/></Col>
                </FormGroup>
                <FormGroup row>
                  <Col sm={7}><Label>Select Year : &nbsp;</Label><select ><option value="First Year">First Year</option><option value="Second Year">Second Year</option><option value="Third Year">Third Year</option><option value="Final Year">Final Year</option><option value="Super Final Year">Super Final Year</option></select>
                  </Col>
                  <Col sm={5}><FormGroup check><Label check><Input type="checkbox" name="remember" innerRef={(input) => this.remember = input}  />Remember Me</Label></FormGroup></Col>
                </FormGroup>
                <Row><Col sm={6}></Col><Col sm={6}><Button outline color="danger" onClick={this.toggleModal}>Cancel</Button>  &nbsp;  &nbsp;<Button outline type="submit" value="submit" color="success">Login</Button></Col></Row>
              </Form>
            </div>
          </ModalBody>
          <ModalFooter className="modal-footer">
            <small><strong>Note : &nbsp;</strong> Please enter correct details!</small>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
class Header extends Component{
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
    };
    this.toggleNav=this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen

    });
  }
  
  render(){
    return(
      <div>
        <Navbar dark expand="sm" color="danger" fixed="top">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/"><img src='assets/img/sample2.jpg' height="40" width="40" alt='Attendance Manager' /></NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link"  to='/'><span className="fa fa-home fa-lg"></span> &nbsp;Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> &nbsp;About Us</NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Login/>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        
        <Jumbotron id="jumbotron">
          <div className="container">
            <Row>
              <Col sm={5} className="offset-1 text-center">
                <h2>Attendance Manager</h2>
              </Col>
              <Col sm={5} className="offset-1 text-center">
                <h5>A web application developed for smart Attendance Management specially for University students.</h5>
              </Col>
            </Row>
          </div>
        </Jumbotron>
      </div>
    );
  };
}

export {Header,Login};