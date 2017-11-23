import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';


class ErrorModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    }
    close(){
        this.setState({
            modal: false
        })
    }
    componentDidMount() {
    this.setState({
        modal: !this.state.modal
      });
          }
    render(){
        return(
            <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.props.title}</ModalHeader>
          <ModalBody>
            {this.props.message}
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.close}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
    }
}
ErrorModal.propTypes = {
    message: PropTypes.string.isRequired,
    title : PropTypes.string.isRequired
  };

export default ErrorModal