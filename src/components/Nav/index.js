
import React, { Component } from 'react';
import './App.css';
import { Button, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink ,Input} from 'reactstrap';

class Navigation extends Component {
    constructor(props) {
        super(props);    
        this.toggle = this.toggle.bind(this);

        this.state = {
          isOpen: false
        };
        this.handleSearch = this.handleSearch.bind(this)
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
      handleSearch(e){
          e.preventDefault();
          let data = this.refs.quick.value ;
          let encoded = encodeURIComponent(data)
          console.log(encoded)
          if(data.length > 0){
            window.location.search = '?location=' + encoded
           } 
      }
render(){
    return(
<div>
<Navbar color="faded" light expand="md">
  <NavbarBrand href="/">Weather React</NavbarBrand>
  <NavbarToggler onClick={this.toggle} />
  <Collapse isOpen={this.state.isOpen} navbar>
    <Nav className="ml-left" navbar>
        <NavItem>
             <NavLink href="/examples">examples</NavLink>
         </NavItem>
      <NavItem>
         <NavLink href="/about">about</NavLink>
      </NavItem>
    </Nav>
    <Nav className="ml-auto">

    <form className="quicksearch" onSubmit={this.handleSearch}>
    <NavItem>
             <Button color="primary" onClick={this.handleSearch}>Search</Button>{' '}
    </NavItem>
    <NavItem>
                 <input className="form-control" type="text" ref="quick" id="exampleEmail" placeholder="Search City" />
    </NavItem>
    </form>
        </Nav>

   
  </Collapse>
</Navbar>
</div>
    );
}

}

export default Navigation;
