import React from "react";
import { students } from "../data";

function Exe5() {
  const a = {
    backgroundColor: "lightGrey",
    border: "1px solid #999999",
    padding: "10px 15px",
    minHeight: "45px",
  };

  return (
    <div className="container my-4">
      <div className="p-5 mb-4" style={{ backgroundColor: "#c4f3fc99" }}>
        <h2>Let's test the grid!</h2>
      </div>
      <nav className="navbar navbar-expand">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav d-flex flex-row gap-3">
              <li className="nav-item">
                <a
                  className="nav-link active text-decoration-none"
                  href="#"
                  style={{ color: "blue" }}>
                  Active
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active text-decoration-none"
                  href="#"
                  style={{ color: "blue" }}>
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active text-decoration-none"
                  href="#"
                  style={{ color: "blue" }}>
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-decoration-none"
                  aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="mb-4 m-5">
        <div className="row">
          <div className="col-6" style={a}>
            First col
          </div>
          <div className="col-6" style={a}>
            Second col
          </div>
        </div>

        <div className="row">
          <div className="col-4" style={a}>
            col
          </div>
          <div className="col-4" style={a}>
            col
          </div>
          <div className="col-4" style={a}>
            col
          </div>
        </div>

        <div className="row">
          <div className="col-3" style={a}>
            col
          </div>
          <div className="col-3" style={a}>
            col
          </div>
          <div className="col-3" style={a}>
            col
          </div>
          <div className="col-3" style={a}>
            col
          </div>
        </div>
      </div>
      <div className="text-center" style={{ backgroundColor: "#7e7c7c99" }}>
        <h2>Created by ABC!</h2>
      </div>

      <div className="p-5 mb-4" style={{ backgroundColor: "#c4f3fc99" }}>
        <h2 className="text-center">My First Bootstrap Page</h2>
      </div>
      <div className="text-center mb-4">
        <img src="/4.png" alt="2" style={{ maxHeight: "250px" }} />
      </div>

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
      <div className="text-center mb-4">
        <h4>About</h4>
        <p>This is the about section of the website</p>
        <h4>Contact</h4>
        <p>For any inquiries, please contact us at example@example.com</p>
      </div>
      <div
        className="p-3 pb-1 mb-4 text-center"
        style={{ backgroundColor: "#f09144b2" }}>
        <p className="text-white">2023 Website All rights reserved</p>
      </div>

      <div className="mt-5 border rounded overflow-hidden">
        <div
          className="p-3 d-flex align-items-center justify-content-between flex-wrap gap-2"
          style={{ backgroundColor: "#f4d3ab" }}>
          <div className="d-flex align-items-center gap-3">
            <img src="/4.png" alt="FPT Logo" style={{ height: "40px" }} />
            <div className="d-flex gap-3">
              <a href="#" className="text-decoration-none text-danger fw-bold">
                Trang chủ
              </a>
              <a href="#" className="text-decoration-none text-danger">
                Ngành học
              </a>
              <a href="#" className="text-decoration-none text-danger">
                Tuyển sinh
              </a>
              <a href="#" className="text-decoration-none text-danger">
                Sinh viên
              </a>
            </div>
          </div>
          <div className="d-flex align-items-center gap-2">
            <label className="m-0 fw-bold">Search:</label>
            <input
              type="text"
              className="form-control form-control-sm"
              style={{ width: "150px" }}
            />
          </div>
        </div>

        <div className="p-4 text-center" style={{ backgroundColor: "#f58220" }}>
          <img
            src="/4.png"
            alt="Banner"
            className="img-fluid rounded"
            style={{ maxHeight: "300px", width: "100%", objectFit: "cover" }}
          />
        </div>

        <div className="p-2 px-3 bg-light border-bottom">
          <span className="text-primary">Home</span> / <span>Students</span>
        </div>

        <div className="p-4 bg-white">
          <h2 className="text-center mb-4">Students Detail</h2>

          <div className="row g-4">
            {students.map((st) => (
              <div key={st.id} className="col-md-6">
                <div className="border p-3 rounded text-center h-100 shadow-sm">
                  <img
                    src="/4.png"
                    alt={st.name}
                    className="img-fluid rounded mb-2"
                    style={{
                      height: "220px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />

                  <div className="text-muted fw-bold mb-2">{st.id}</div>

                  <div className="row text-start fs-6 mb-3">
                    <div className="col-6">
                      <div className="fw-semibold">{st.name}</div>
                      <div className="form-check mt-1">
                        <input
                          className="form-check-input"
                          type="radio"
                          name={`status-${st.id}`}
                          id={`absent-${st.id}`}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`absent-${st.id}`}>
                          Absent
                        </label>
                      </div>
                    </div>

                    <div className="col-6 text-end">
                      <div className="fw-semibold">{st.location}</div>
                      <div className="form-check d-inline-block mt-1">
                        <input
                          className="form-check-input"
                          type="radio"
                          name={`status-${st.id}`}
                          id={`present-${st.id}`}
                        />
                        <label
                          className="form-check-label ms-1"
                          htmlFor={`present-${st.id}`}>
                          Present
                        </label>
                      </div>
                    </div>
                  </div>

                  <button
                    className="btn text-white fw-bold px-4"
                    style={{ backgroundColor: "#f58220" }}>
                    Submit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4" style={{ backgroundColor: "#d66a0ce7" }}>
          <div className="row align-items-center">
            <div className="col-md-6 mb-3 mb-md-0">
              <h5 className="fw-bold mb-2">Our Address</h5>
              <p className="m-0">Khu đô thị FPT Đà Nẵng</p>
              <p className="m-0">+84523111111</p>
              <p className="m-0">+852 8765 4321</p>
              <a className="m-0">fptudn@fpt.edu.vn</a>
            </div>
            <div className="col-md-6 text-md-end">
              <div className="d-flex justify-content-md-end gap-3 fs-5">
                <span>G+</span>
                <span>f</span>
                <span>in</span>
              </div>
            </div>
          </div>
          <div className="text-center mt-3 pt-3 ">
            <small>© Copyright 2023</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exe5;
