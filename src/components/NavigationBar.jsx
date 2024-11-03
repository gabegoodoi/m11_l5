import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap'


// Navbar.Brand, Navbar.Toggle, Navbar.Collapse, Nav.Link
function NavigationBar() {
    return (
        <Navbar bg="dark" expand="lg">
            <Navbar.Brand href="/" id="brand-id">E-Commerce App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-class"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink as={NavLink} to="/" activeclassname="active">Home</NavLink>
                    <NavLink as={NavLink} to="/add-customers" activeclassname="active">Add Customer</NavLink>
                    <NavLink as={NavLink} to="/customers" activeclassname="active">Customers</NavLink>
                    <NavLink as={NavLink} to="/add-products" activeclassname="active">Add Product</NavLink>
                    <NavLink as={NavLink} to="/products" activeclassname="active">Products</NavLink>                
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        
        // <nav className="clearfix">


        // </nav>
    );
}

export default NavigationBar;
