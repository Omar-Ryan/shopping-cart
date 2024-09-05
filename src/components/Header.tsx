import { Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar
      bg="primary"
      data-bs-theme="dark"
      className="d-flex justify-content-between px-3 fw-bold"
    >
      <Navbar.Brand href="/" style={{ fontSize: "24px" }}>
        O.R
      </Navbar.Brand>
      <Nav className="me-2">
        <Nav.Link href="/" className="me-2" style={{ fontSize: "18px" }}>
          Home
        </Nav.Link>
        <Nav.Link href="store" className="me-2" style={{ fontSize: "18px" }}>
          Store
        </Nav.Link>
        <Nav.Link href="about" className="me-2" style={{ fontSize: "18px" }}>
          About
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
