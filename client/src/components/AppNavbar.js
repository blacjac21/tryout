import { Component, Fragment } from 'react';
import {
    Collapse, 
    Navbar, 
    NavbarToggler, 
    NavbarBrand, 
    Nav, 
    NavItem, 
    Container, 
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    LinkContainer,
    DropdownItem,
    Button,
} from 'reactstrap';
import RegisterModal from './auth/registerModal';
import Logout from './auth/Logout';
import LoginModal from './auth/loginModal';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import companyLogo from "../assets/logo.png";
import "../css/navbar.css"
import Header from '../js/Header';

class AppNavbar extends Component {
    state = {
        isOpen: false
    }

    static propTypes = {
        auth: PropTypes.object.isRequired
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <Fragment>
                <NavItem>
                    <span className="navbar-text mr-3">
                        <strong>{ user ? `Welcome ${user.name}` : ''}</strong>
                    </span>
                </NavItem>
               
                <NavItem>
                    <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/cc">Products</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/cart">Cart</NavLink>
                </NavItem>
                <NavItem className="mr-2">
                    <NavLink href="/orders">Orders</NavLink>
                </NavItem>
                <NavItem>
                    <Logout/>
                </NavItem>
                
            </Fragment>
        );

        const guestLinks = (
            <Fragment>
                <NavItem>
                    <NavLink href="/">Home</NavLink>
                </NavItem>
                
                
                <NavItem>
                    <NavLink href="/cc">Products</NavLink>
                </NavItem>
                
                <NavItem>
                    <RegisterModal/>
                </NavItem>
                <NavItem>
                    <LoginModal/>
                </NavItem>
           
               
                
                
            </Fragment>
            
        );

        return(
            <div>
               
                <Navbar color="#202020" dark expand="sm" className="mb-5" fixed="top">
                <div className="logo">
                <img src={companyLogo} alt="logo" ></img>
                
                </div>
                    <Container>
                        <NavbarBrand href="/">Filcon Sales and Service</NavbarBrand>
                        
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar> 
                                { isAuthenticated ? authLinks: guestLinks}                               
                            </Nav>
                        </Collapse>

    
 

                    </Container>
                    
                    
                   
                    
                   
                </Navbar>
               
              
               
                
            </div>
           
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, null)(AppNavbar);