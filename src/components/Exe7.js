import { Container, Card, Row, Col } from "react-bootstrap";
function Exe7() {
  return (
    <Container>
      <h3>Cards Columns</h3>
      <Row>
        <Col md={4}>
          <Card bg="primary" className="p-3 border-0 rounded-1">
            <Card.Img variant="top " src="/Images/nam1.jpg"></Card.Img>
            <Card.Body className="p-0 pt-3 text-center">
              <Card.Title className="small text-dark">
                <span> Some text inside the first card</span>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card bg="warning" className="p-3 border-0 rounded-1">
            <Card.Img variant="top " src="/Imag es/nam1.jpg"></Card.Img>
            <Card.Body className="p-0 pt-3 text-center">
              <Card.Title className="small text-dark">
                <span> Some text inside the first card</span>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card bg="danger" className="p-3 border-0 rounded-1">
            <Card.Img variant="top " src="/Images/nam1.jpg"></Card.Img>
            <Card.Body className="p-0 pt-3 text-center">
              <Card.Title className="small text-dark">
                <span> Some text inside the first card</span>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default Exe7;
