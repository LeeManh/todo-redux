import { Input, Row, Col } from "antd";

const { Search } = Input;

const TodoInput = () => {
  const onSearch = () => {};

  return (
    <Row
      style={{
        position: "absolute",
        bottom: "15px",
        left: "15px",
        width: "calc(100% - 30px)",
      }}
    >
      <Col span={24}>
        <Search placeholder="Enter Todo ..." />
      </Col>
    </Row>
  );
};

export default TodoInput;
