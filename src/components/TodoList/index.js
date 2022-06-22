import { Row, Col, Typography } from "antd";
import { useSelector } from "react-redux";

import TodoItem from "../TodoItem";

const TodoList = () => {
  const todoList = useSelector((state) => state.todoList);
  console.log(todoList);

  return (
    <Row>
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
