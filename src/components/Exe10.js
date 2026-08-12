import {
  Container,
  Navbar,
  Nav,
  Form,
  Button,
  Row,
  Col,
  Card,
  Badge,
} from "react-bootstrap";
import { pizzas, services } from "../data";

function Exe10() {
  return (
    <div className="bg-dark text-white min-vh-100 pb-5 ">
      <Navbar
        bg="dark"
        variant="dark"
        className="px-3 border-bottom border-secondary">
        <Navbar.Brand className="fw-bold">Pizza House</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About Us</Nav.Link>
          <Nav.Link href="#">Contact</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-1 bg-dark text-white border-secondary"
          />
          <Button variant="danger"></Button>
        </Form>
      </Navbar>
      <div className="position-relative text-center mb-4">
        <img
          src="/Pizza.jpg"
          alt="banner"
          style={{ width: "100%", maxHeight: "350px", objectFit: "cover" }}
        />
        <div className="position-absolute top-50 start-50 translate-middle bg-dark p-3 bg-opacity-75 rounded ">
          <h1 className="fw-bold">Neapolitan Pizza</h1>
          <p className="m-0 text-white-50">
            Authentic Italian taste in every bite
          </p>
        </div>
      </div>
      <Container>
        <h2 className="text-center my-4 fw-bold">Our Menu</h2>
        <Row>
          {pizzas.map((pizza) => (
            <Col key={pizza.id}>
              <Card
                bg="dark"
                text="white"
                className="border-secondary h-100 position-relative">
                {pizzas.badge && (
                  <Badge
                    bg="warning"
                    text="dark"
                    className="position-absolute top-0 start-0 m-2">
                    {pizza.badge}
                  </Badge>
                )}
                <Card.Img
                  variant="top"
                  src={pizza.image}
                  style={{ height: "160px", objectFit: "cover" }}
                />
                <Card.Body className="text-center d-flex flex-column">
                  <Card.Title>{pizza.name}</Card.Title>
                  <p>
                    <span className="text-decoration-line-through text-secondary me-2">
                      ${pizza.originalPrice.toFixed(2)}
                    </span>
                    <span className="text-warning fw-bold">
                      ${pizza.price.toFixed(2)}
                    </span>
                  </p>
                  <Button
                    variant="dark"
                    className="border-secondary mt-auto w-100">
                    Buy
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <h2 className="text-center my-5 fw-bold">Book Your Table</h2>
        <Form className="mx-auto" style={{ maxWidth: "650px" }}>
          <Row className="mb-3">
            <Col md={4} className="mb-2 mb-md-0">
              <Form.Control
                type="text"
                placeholder="Enter your name *"
                className="bg-dark text-white border-secondary"
              />
            </Col>
            <Col md={4} className="mb-2 mb-md-0">
              <Form.Control
                type="date"
                className="bg-dark text-white border-secondary"
              />
            </Col>
            <Col md={4}>
              <Form.Select
                defaultValue=""
                className="bg-dark text-white border-secondary"
                style={{ color: "white" }}>
                <option value="" disabled hidden>
                  Select a Service *
                </option>
                {services.map((item) => (
                  <option key={item.id} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </Form.Select>
            </Col>
          </Row>

          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Please share your message..."
            className="mb-3 bg-dark text-white border-secondary"
          />

          <div className="text-center">
            <Button variant="warning" type="submit" className="fw-bold px-4">
              Send Message
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}
export default Exe10;
