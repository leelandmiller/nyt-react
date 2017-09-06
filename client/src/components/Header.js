import React from 'react';
import {Jumbotron, Nav, NavItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => (
    <div>
        <Jumbotron className="text-center">
            <h1>NYT Article Search</h1>
            <p>Search for and save articles of interest</p>
        </Jumbotron>
        <Nav bsStyle="tabs">
            <LinkContainer exact to="/">
                <NavItem>Search for Articles</NavItem>
            </LinkContainer>
            <LinkContainer to="/saved">
                <NavItem>Saved Articles</NavItem>
            </LinkContainer>
        </Nav>
    </div>
);

export default Header;
