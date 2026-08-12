import {
  Container,
  Navbar,
  NavDropdown,
  Nav,
  Form,
  Col,
  Button,
  Row,
  Carousel,
  Card,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

function Exe6() {
  return (
    <Container>
      <Navbar expand="lg" inline>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Form>
              <Row>
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className=" mr-sm-2"
                  />
                </Col>
                <Col xs="auto">
                  <Button type="Search" variant="outline-primary">
                    Search
                  </Button>
                </Col>
              </Row>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded"
            src="/Images/banner1.jpg"
            style={{ height: "450px" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded"
            src="/Images/banner2.jpg"
            style={{ height: "450px" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded"
            src="/Images/banner3.jpg"
            style={{ height: "450px" }}
          />
        </Carousel.Item>
      </Carousel>
      <h1>NEW PRODUCT</h1>
      <p>List product description</p>
      <Col>
        <Row style={{ marginBottom: "50px" }}>
          <Card style={{ width: "18rem", marginRight: "25px" }}>
            <Card.Img variant="top" src="/Images/banner3.jpg" />
            <Card.Body>
              <Card.Title>Product</Card.Title>
              <Card.Text
                style={{ display: "flex", justifyContent: "space-between" }}>
                <del style={{ color: "#9999" }}>100.000 vnd</del>
                <span style={{ color: "orange", fontWeight: "bold" }}>
                  80.000 vnd
                </span>
              </Card.Text>
              <div style={{ display: "flex" }}>
                <Button
                  variant="primary"
                  className="position-relative d-flex align-items-center m-1 ">
                  <FaShoppingCart size={18} />
                </Button>
                <Button variant="outline-primary">xem chi tiết</Button>
              </div>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", marginRight: "25px" }}>
            <Card.Img variant="top" src="/Images/banner3.jpg" />
            <Card.Body>
              <Card.Title>Product</Card.Title>
              <Card.Text
                style={{ display: "flex", justifyContent: "space-between" }}>
                <del style={{ color: "#9999" }}>100.000 vnd</del>
                <span style={{ color: "orange", fontWeight: "bold" }}>
                  80.000 vnd
                </span>
              </Card.Text>
              <div style={{ display: "flex" }}>
                <Button
                  variant="primary"
                  className="position-relative d-flex align-items-center m-1 ">
                  <FaShoppingCart size={18} />
                </Button>
                <Button variant="outline-primary">xem chi tiết</Button>
              </div>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", marginRight: "25px" }}>
            <Card.Img variant="top" src="/Images/banner3.jpg" />
            <Card.Body>
              <Card.Title>Product</Card.Title>
              <Card.Text
                style={{ display: "flex", justifyContent: "space-between" }}>
                <del style={{ color: "#9999" }}>100.000 vnd</del>
                <span style={{ color: "orange", fontWeight: "bold" }}>
                  80.000 vnd
                </span>
              </Card.Text>
              <div style={{ display: "flex" }}>
                <Button
                  variant="primary"
                  className="position-relative d-flex align-items-center m-1 ">
                  <FaShoppingCart size={18} />
                </Button>
                <Button variant="outline-primary">xem chi tiết</Button>
              </div>
            </Card.Body>
          </Card>
          <Card
            style={{
              position: "relative",
              overflow: "hidden",
              width: "280px",
            }}>
            <span
              className="sale-ribbon"
              style={{
                position: "absolute",
                top: "18px",
                right: "-30px",
                width: "120px",
                backgroundColor: "#ff9800", // Màu nền cam
                color: "#ffffff", // Màu chữ trắng
                fontWeight: "bold",
                fontSize: "12px",
                textAlign: "center",
                padding: "4px 0",
                transform: "rotate(45deg)", // Xoay 45 độ
                zIndex: 2,
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.15)",
              }}>
              Sale
            </span>
            <Card.Img variant="top" src="/Images/banner3.jpg" />
            <Card.Body>
              <Card.Title>Product</Card.Title>
              <Card.Text
                style={{ display: "flex", justifyContent: "space-between" }}>
                <del style={{ color: "#9999" }}>100.000 vnd</del>
                <span style={{ color: "orange", fontWeight: "bold" }}>
                  80.000 vnd
                </span>
              </Card.Text>
              <div style={{ display: "flex" }}>
                <Button
                  variant="primary"
                  className="position-relative d-flex align-items-center m-1 ">
                  <FaShoppingCart size={18} />
                </Button>
                <Button variant="outline-primary">xem chi tiết</Button>
              </div>
            </Card.Body>
          </Card>
        </Row>
      </Col>
    </Container>
  );
}
export default Exe6;
