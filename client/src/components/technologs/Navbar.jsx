import {React} from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavbarItem = (props) => {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        
        <Navbar.Brand><Link to='/technologs'>Techno Logs</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >&nbsp; &nbsp; &nbsp;
            <Link to="/technologs/blogs">Blogs</Link> &nbsp; &nbsp; &nbsp;
            <Link to="/technologs/">Categories</Link>&nbsp; &nbsp; &nbsp;
            <Link to="/technologs/about">About</Link>&nbsp; &nbsp; &nbsp;
            
            {/* <Button variant="outline-warning" ><Link to='/'>Author</Link></Button>  */}
          </Nav>
                        
        </Navbar.Collapse>
      </Container>



    </Navbar>

    </>
  )
}

export default NavbarItem