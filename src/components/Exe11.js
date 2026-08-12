import React, { useState } from "react";
import { Container } from "react-bootstrap";

function Exe11() {
  // BÀI 1: TO-DO LIST
  const [todoInput, setTodoInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = () => {
    if (todoInput.trim() !== "") {
      setTodoList([...todoList, todoInput]);
      setTodoInput("");
    }
  };

  const handleDeleteTodo = (indexToDelete) => {
    setTodoList(todoList.filter((_, index) => index !== indexToDelete));
  };

  // BÀI 2: CALCULATOR

  const [firstNum, setFirstNum] = useState("");
  const [secondNum, setSecondNum] = useState("");
  const [operator, setOperator] = useState("+");
  const [calcResult, setCalcResult] = useState("");

  const handleCompute = () => {
    const num1 = parseFloat(firstNum) || 0;
    const num2 = parseFloat(secondNum) || 0;
    let res = 0;

    switch (operator) {
      case "+":
        res = num1 + num2;
        break;
      case "-":
        res = num1 - num2;
        break;
      case "*":
        res = num1 * num2;
        break;
      case "/":
        res = num2 !== 0 ? num1 / num2 : "Error";
        break;
      default:
        res = 0;
    }
    setCalcResult(res);
  };

  // BÀI 3: SEARCH FILTER

  const [searchTerm, setSearchTerm] = useState("");
  const techList = [
    "React",
    "NodeJs",
    "MongoDB",
    "Express",
    "Angular",
    "VueJs",
  ];

  const filteredTech = techList.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <Container className="py-4" style={{ maxWidth: "600px" }}>
      {/* BÀI 1 */}
      <div className="mb-5 text-center">
        <div className="d-flex justify-content-center gap-1 mb-3">
          <input
            type="text"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
            style={{ width: "250px", padding: "4px 8px" }}
          />
          <button className="btn btn-light border" onClick={handleAddTodo}>
            Add List
          </button>
        </div>

        <h2 className="fw-bold my-4">List of Items</h2>

        <div>
          {todoList.map((item, index) => (
            <div
              key={index}
              style={{ cursor: "pointer" }}
              className="my-1 fs-5"
              onClick={() => handleDeleteTodo(index)}>
              {item}
            </div>
          ))}
        </div>
      </div>

      <hr className="my-5" />

      {/* BÀI 2 */}
      <div className="mb-5 d-flex justify-content-center">
        <div style={{ width: "260px" }}>
          <div className="d-flex align-items-center mb-2">
            <label style={{ width: "70px" }}>First:</label>
            <input
              type="number"
              value={firstNum}
              onChange={(e) => setFirstNum(e.target.value)}
              className="form-control form-control-sm"
            />
          </div>

          <div className="d-flex align-items-center mb-2">
            <label style={{ width: "70px" }}>Second:</label>
            <input
              type="number"
              value={secondNum}
              onChange={(e) => setSecondNum(e.target.value)}
              className="form-control form-control-sm"
            />
          </div>

          <div className="d-flex align-items-center mb-2">
            <label style={{ width: "70px" }}>Operator</label>
            <select
              value={operator}
              onChange={(e) => setOperator(e.target.value)}
              className="form-select form-select-sm"
              style={{ width: "60px" }}>
              <option value="+">+</option>
              <option value="-">-</option>
              <option value="*">*</option>
              <option value="/">/</option>
            </select>
          </div>

          <div className="text-center my-2 ms-4">
            <button
              className="btn btn-light btn-sm border px-3"
              onClick={handleCompute}>
              Compute
            </button>
          </div>

          <div className="d-flex align-items-center mb-2">
            <label style={{ width: "70px" }}>Result:</label>
            <input
              type="text"
              value={calcResult}
              readOnly
              className="form-control form-control-sm"
            />
          </div>
        </div>
      </div>

      <hr className="my-5" />

      {/* BÀI 3 */}
      <div className="text-center">
        <div className="d-flex justify-content-center align-items-center gap-2 mb-4">
          <span className="fs-3">Search:</span>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: "300px", padding: "4px 8px" }}
          />
        </div>

        <div className="fs-3">
          {filteredTech.map((tech, index) => (
            <div key={index} className="my-1">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Exe11;
