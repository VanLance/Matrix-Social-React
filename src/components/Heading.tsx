import NavBar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';

export default function Heading(): JSX.Element {
  return (
    <>
      <NavBar>
        <NavBar.Brand>Matrix Social</NavBar.Brand>
        <Nav.Item>
          <Nav.Link>Login</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Register</Nav.Link>
        </Nav.Item>
      </NavBar>
      <h1>Matrix Social</h1>
    </>
  );
}
