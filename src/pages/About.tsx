import { Card, CardHeader, Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function About() {
  return (
    <Stack className="d-flex justify-content-center align-items-center">
      <Card className="p-3 m-auto mt-5">
        <CardHeader
          style={{
            fontWeight: "bolder",
            fontSize: "18px",
            padding: "14px 0px",
          }}
        >
          Registration
        </CardHeader>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail" className="mt-2">
              <Form.Label className="fw-bold">Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword" className="mt-2">
              <Form.Label className="fw-bold">Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
              <Form.Label className="fw-bold">Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
              <Form.Label className="fw-bold">Mobile number</Form.Label>
              <Form.Control type="number" placeholder="+20 01011111111" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label className="fw-bold">Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </Stack>
  );
}

export default About;
