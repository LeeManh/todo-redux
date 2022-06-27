import { Row, Col, Typography } from "antd";
import { useSelector } from "react-redux";

import TodoItem from "../TodoItem";
import { todoListRemaning } from "../../redux/selectors";

const TodoList = () => {
  const todoList = useSelector(todoListRemaning);
  console.log({ todoList });
  return (
    <Row style={{ overflow: "auto" }}>
      <Typography.Paragraph className="title">Todo List</Typography.Paragraph>
      <Col span={24}>
        {todoList.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </Col>
    </Row>
  );
};

export default TodoList;
