import { Row, Tag, Checkbox } from "antd";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

import { toggleTodoCompleted } from "../TodoList/TodosSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(todo.completed);
  const onChange = () => {
    setChecked(!checked);
    dispatch(toggleTodoCompleted(todo.id));
  };

  const color = useCallback(() => {
    if (todo.priority === "High") return "red";
    else if (todo.priority === "Medium") return "blue";
    else {
      return "gray";
    }
  }, [todo.priority]);

  return (
    <Row justify="space-between" style={{ marginBottom: "5px" }}>
      <Checkbox onChange={onChange} checked={checked}>
        {todo.name}
      </Checkbox>
      <Tag color={color(todo.priority)}>{todo.priority}</Tag>
    </Row>
  );
};

export default TodoItem;
