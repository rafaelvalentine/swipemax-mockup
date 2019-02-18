import React, { Component } from 'react'
import {Nav, Navbar, NavDropdown, Form, Button, FormControl, Modal, InputGroup, Tabs, Tab } from 'react-bootstrap'
import PropTypes from 'prop-types'
import EmailDropdown from './tools/EmailDropdown'
import NotificationDropdown from './tools/NotificationDropdown'
import UserDropdown from './tools/UserDropdown'
import './Navbar.css'

export default class CustomNavbar extends Component {
  constructor(...args) {
    super(...args);

    this.state = { modalShow: false };
  }

  static propTypes = {
    prop: PropTypes
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false });
    return (
      <div>
        <Navbar  id='navbar' bg="light" expand="lg">
            <Navbar.Brand href="#home"><img className="navbar-logo" src="assets/img/new-logo.png" alt=""/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav  id='navbar-list' className="m-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#">Sessions</Nav.Link>
                <Nav.Link href="#">Topics</Nav.Link>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                </Form>
                <EmailDropdown/>
                <NotificationDropdown/>
                <UserDropdown/>
                <Button className='new-post_button' variant="outline-success" onClick={() => this.setState({ modalShow: true })}>New Post</Button>
              </Nav>
             
            </Navbar.Collapse>
        </Navbar>
        <MyVerticallyCenteredModal
          show={this.state.modalShow}
          onHide={modalClose}
        />
      </div>
    )
  }
}
class MyVerticallyCenteredModal extends Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          {/* <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  <Tab eventKey="home" title="QUESTION">
  
  </Tab>
  <Tab eventKey="profile" title="INSIGHT">
    
  </Tab>

</Tabs>
{/* <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p> */}
          <div id='modal-form' style={{margin:'20px 0'}}>
          <label htmlFor="topic">Topic</label>
  <InputGroup className="mb-4">
    <FormControl
      placeholder=""
      aria-label="Topic"
      aria-describedby="basic-addon1"
      id='topic'
    />
  </InputGroup>
  <label htmlFor="question">Type your question</label>
  <InputGroup className="mb-4">
    <FormControl
      placeholder=""
      aria-label="Type your question"
      aria-describedby="basic-addon2"
      id='question'

    />
    <InputGroup.Prepend>
      <InputGroup.Text><i class="far fa-image"></i></InputGroup.Text>
    </InputGroup.Prepend>
  </InputGroup>
  <label htmlFor="mention">@mention someone for an answer</label>
  <InputGroup className="mb-4">
    <FormControl aria-label="@mention someone for an answer" 
     id='mention'
    />
   
  </InputGroup>


</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='success' onClick={this.props.onHide}>Post</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

