import React from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button, Col, Panel } from 'react-bootstrap';

const SearchForm = props => (
    <Col xs={12}>
        <Panel>
            <Form horizontal>
                <FormGroup controlId="searchTerm" validationState={props.validation}>
                    <Col componentClass={ControlLabel} sm={2}>
                        Search Topic
                    </Col>
                    <Col sm={10}>
                        <FormControl name="searchTerm" type="text" value={props.searchTerm} onChange={props.handleChange} placeholder="Search Term"/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="startYear">
                    <Col componentClass={ControlLabel} sm={2}>
                        Start Year
                    </Col>
                    <Col sm={10}>
                        <FormControl name="startYear" type="text" value={props.startYear} onChange={props.handleChange} placeholder="Start Year"/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="endYear">
                    <Col componentClass={ControlLabel} sm={2}>
                        End Year
                    </Col>
                    <Col sm={10}>
                        <FormControl name="endYear" type="text" value={props.endYear} onChange={props.handleChange} placeholder="End Year"/>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button type="submit" onClick={props.handleSubmit}>
                            Search
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        </Panel>
    </Col>
);

export default SearchForm;
