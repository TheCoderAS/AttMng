import React,{Component} from 'react';
import {Modal,ModalHeader,ModalBody,ModalFooter,Button,Row,Col,Label} from 'reactstrap';
import {Control,LocalForm,Errors} from 'react-redux-form';
import {Login} from './Header';
import {Link} from 'react-router-dom';

const required = val => val && val.length;
const maxLength = len => val => !val || val.length <= len;
const minLength = len => val => val && val.length >= len;

class Register extends Component{
  constructor(props){
    super(props);
    this.state={
      isModalOpen:false
    };
    this.toggleModal=this.toggleModal.bind(this);
  }
  toggleModal(){
    this.setState({
      isModalOpen: !this.state.isModalOpen
    })
  }
  handleSubmit(values) {
    var pass=JSON.stringify(values.password);
    var confirm=JSON.stringify(values.confirmpassword);
    if(pass!=confirm){
      alert('Password not matched');
    }else{
    window.confirm("Current State is: " + JSON.stringify(values));
    }
  }
  render(){
    return(
      <div>
        <Link id="log"><h6 onClick={this.toggleModal}><span className="fa fa-user-plus"></span> &nbsp;<strong>Register</strong></h6></Link>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Register</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={this.handleSubmit}>
              <Row className="form-group">
                <Col sm={6}>
                  <Label htmlFor="roll">Roll No. :</Label>
                  <Control.text
                    model=".roll"
                    id="roll"
                    name="roll"
                    placeholder="Enter Roll No."
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(5),
                      maxLength: maxLength(6)
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".roll"
                    show="touched"
                    messages={{
                      required: "Required ",
                      minLength: "Must be 5-6 digits",
                      maxLength: "Must be 5-6 digits"
                    }}
                  />
                </Col>
                <Col sm={6}>
                  <Label htmlFor="password">Password :</Label>
                  <Control.password
                    model=".password"
                    id="password"
                    name="password"
                    placeholder="Enter Password"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(6),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".password"
                    show="touched"
                    messages={{
                      required: "Required ",
                      minLength: "Password must contain atleast 6 characters",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={6}></Col>
                <Col sm={6}>
                  <Label htmlFor="confirmpassword">Confirm Password :</Label>
                  <Control.password
                    model=".confirmpassword"
                    id="confirmpassword"
                    name="confirmpassword"
                    placeholder="Confirm Password"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(6),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".confirmpassword"
                    show="touched"
                    messages={{
                      required: "Required ",
                      minLength: "Password must contain atleast 6 characters",
                    }}
                  />
                </Col>
              </Row>
              <Button outline color="danger" onClick={this.toggleModal}>Cancel</Button>  &nbsp;  &nbsp;<Button outline type="submit" value="submit" color="success">Register</Button>
            </LocalForm>
          </ModalBody>
          <ModalFooter><small><strong>Note : &nbsp;</strong>By Registering, You are agreeing all privacy and policy terms.</small></ModalFooter>
        </Modal>
      </div>
    );
  }
}

class Footer extends Component{

  render(){
    return(
      <div id="footer">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-5 offset-1">
            <h5>Links</h5><hr></hr>
            <ul className="list-unstyled">
              <li><Link to='/AttMng' id="log"><span className="fa fa-home"></span> &nbsp;<strong>Home</strong></Link></li>
              <li><Link to='/AttMng/aboutus' id="log"><span className="fa fa-info"></span> &nbsp;<strong>About Us</strong></Link></li>                    
              <li><Link to='/AttMng/contactus' id="log"><span className="fa fa-address-card"></span> &nbsp;<strong>Contact Us</strong></Link></li>
            </ul>
            </div>
            <div className="col-5 offset-1">
              <h5>Register/Login</h5><hr></hr>
              <ul className="list-unstyled">
                <li><Login/></li>
                <li ><Register/></li>                  
                <li><Link to='/AttMng/help' id="log"><strong><span className="fa fa-question-circle"></span> &nbsp;Help!</strong></Link></li>
              </ul>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="row justify-content-center">             
          <div className="col-auto">
            <p>© Copyright 2020 Attendance Manager</p>
          </div>
        </div>
      </div>
    );
  };
}
export default Footer;