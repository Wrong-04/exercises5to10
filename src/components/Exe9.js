import { Container, Card } from "react-bootstrap";
function Exe9() {
  return (
    <Container>
      {" "}
      <div
        className="p-3 pb-1 mb-4 text-center"
        style={{ backgroundColor: "#ff7300d0" }}>
        <img src="/4.png" alt="fpt" style={{ maxHeight: "150px" }} />
        <nav className="mt-3">
          <div>
            <ul className="d-flex flex-row justify-content-center gap-4 list-unstyled">
              <li>
                <a href="#" className="text-decoration-none text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="mb-4">
        <Card className="shadow-sm">
          <Card.Body className="d-flex justify-content-between align-items-center p-4">
            <div className="d-flex flex-column align-items-start">
              <img
                src="/4.png"
                alt="FPT Education"
                style={{ maxHeight: "150px" }}
              />
            </div>
            <div className="text-center pe-3">
              <div className="fw-bold fs-5 mb-1" style={{ color: "#000" }}>
                Huy Nguyen - FPT HaNoi
              </div>
              <div className="text-muted">Moblie: 0982827763</div>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div
        className="p-3 pb-1 mb-4 text-center"
        style={{ backgroundColor: "#f09144b2" }}>
        <p className="text-white">2023 Website All rights reserved</p>
      </div>
    </Container>
  );
}
export default Exe9;
