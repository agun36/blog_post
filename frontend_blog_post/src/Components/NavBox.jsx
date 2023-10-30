import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import DropdownCom from "./DropdownCom";
import Description from "./Description";

function OffcanvasExample() {
  return (
    <div className="description_header">
      {["xl"].map((expand) => (
        <>
          <Navbar key={expand} expand={expand} className=" mb-3 container">
            <Container fluid>
              <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>

              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1">
                    <DropdownCom id="mobile_dropdown" />
                  </Nav>
                  <Form className="d-flex">
                    <Button variant="outline-success">Sign Up</Button>
                    <Button variant="outline-disabled">Sign In</Button>
                  </Form>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
          <div className="mt-5 d-flex justify-content-center">
            <Description />
          </div>
        </>
      ))}
    </div>
  );
}

export default OffcanvasExample;
