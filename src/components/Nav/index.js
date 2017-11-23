
import React, { Component } from 'react';
import './App.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink ,Input} from 'reactstrap';

class Navigation extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
render(){
    return(
<div>
<Navbar color="faded" light expand="md">
  <NavbarBrand href="/">Weather React</NavbarBrand>
  <NavbarToggler onClick={this.toggle} />
  <Collapse isOpen={this.state.isOpen} navbar>
    <Nav className="ml-auto" navbar>
    <NavItem>
      <Input type="text" name="email" id="exampleEmail" placeholder="with a placeholder" />
          </NavItem>
      <NavItem>
        <NavLink href="/examples">examples</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/about">about</NavLink>
      </NavItem>
    </Nav>
  </Collapse>
</Navbar>
</div>
    );
}

}

export default Navigation;
