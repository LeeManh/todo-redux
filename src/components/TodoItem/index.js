import { Row, Tag, Checkbox } from "antd";

const TodoItem = ({ todo }) => {
  const onChange = () => {};

  return (
    <Row justify="space-between" style={{ marginBottom: "5px" }}>
      <Checkbox onChange={onChange}>{todo.name}</Checkbox>
      <Tag color="red">{todo.priority}</Tag>
    </Row>
  );
};

export default TodoItem;
