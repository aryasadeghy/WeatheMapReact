import React,{Component} from 'react';
import './index.css'
import {Form,Container, Row, Col, Input, Button} from 'reactstrap'


export default class WeatherForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleSubmit(e){
        e.preventDefault();
        let location = this.refs.location.value;
        console.log(location    )
        // if(location.length > 0){
            this.refs.location.value = "";
            this.props.onSearch(location);
        // }
    }
    render() {
        return (
        <Container>
            <Row>   
            <Col sm="12" md={{ size: 8, offset: 2 }}>
                <Form onSubmit={this.handleSubmit} >
                         <input type="text"   ref="location" className="form-control" placeholder="Search the city you are looking for"/>
                         <br/>
                        <Button color="primary" size="lg" block>Get</Button>
                 </Form>         
                </Col>
            </Row>
      </Container>
        );
    }
}

