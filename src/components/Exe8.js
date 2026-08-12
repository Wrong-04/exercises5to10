import { Container, Form, Button, Col, Row, InputGroup, Alert } from "react-bootstrap";
import { useState } from "react";
import { FaUser } from "react-icons/fa";

function Exe8() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Container className="my-4" style={{ maxWidth: "600px" }}>
      <Alert variant="warning" dismissible className="mb-4" />

      <h1 className="mb-4">Form đặt vé máy bay</h1>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formHoTen">
          <Form.Label>Họ tên</Form.Label>
          <InputGroup>
            <InputGroup.Text>
              <FaUser />
            </InputGroup.Text>
            <Form.Control type="text" placeholder="Họ tên" required />
            <InputGroup.Text>vnđ</InputGroup.Text>
          </InputGroup>
          <Form.Text className="text-muted">
            Phải nhập 5 ký tự, in hoa....
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDiaChi">
          <Form.Label>Địa chỉ</Form.Label>
          <Form.Control type="text" required />
          <Form.Text className="text-muted">
            Phải nhập 5 ký tự, in hoa....
          </Form.Text>
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} md={6} controlId="formDiTu">
            <Form.Label>Đi từ</Form.Label>
            <Form.Select defaultValue="Hà nội">
              <option value="Hà nội">Hà nội</option>
              <option value="TP.HCM">TP.HCM</option>
              <option value="Đà Nẵng">Đà Nẵng</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} md={6} controlId="formDen">
            <Form.Label>Đến</Form.Label>
            <Form.Select defaultValue="Hà nội">
              <option value="Hà nội">Hà nội</option>
              <option value="TP.HCM">TP.HCM</option>
              <option value="Đà Nẵng">Đà Nẵng</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Form.Group className="mb-4" controlId="formChieuDi">
          <Form.Label>Chọn chiều đi (Khứ hồi)</Form.Label>
          <Form.Check type="checkbox" label="Đi" id="check-di" />
          <Form.Check type="checkbox" label="Về" id="check-ve" />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100 py-2">
          Đặt vé
        </Button>
      </Form>
    </Container>
  );
}

export default Exe8;



