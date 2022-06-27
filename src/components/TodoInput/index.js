import { useDispatch } from "react-redux";
import { Input, Select, Tag, Button } from "antd";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

import { addTodo } from "../../redux/actions";

const TodoInput = () => {
  const dispatch = useDispatch();

  const [todoName, setTodoName] = useState("");
  const [todoPriority, setTodoPriority] = useState("Medium");

  const handleInput = (e) => {
    setTodoName(e.target.value);
  };

  const handlePriority = (value) => {
    console.log(value);
    setTodoPriority(value);
  };

  const handleAddBtn = (e) => {
    e.preventDefault();
    if (todoName.trim() === "") return;

    dispatch(
      addTodo({
        id: uuidv4(),
        name: todoName,
        completed: false,
        priority: todoPriority,
      })
    );

    setTodoName("");
    setTodoPriority("Medium");
  };

  return (
    <div style={{ marginTop: "auto" }}>
      <Input.Group
        style={{
          display: "flex",
        }}
      >
        <Input
          placeholder="Enter Todo ... "
          value={todoName}
          onChange={handleInput}
        />
        <Select
          defaultValue="Medium"
          value={todoPriority}
          onChange={handlePriority}
        >
          <Select.Option value="High" label="High">
            <Tag color="red">High</Tag>
          </Select.Option>
          <Select.Option value="Medium" label="Medium">
            <Tag color="blue">Medium</Tag>
          </Select.Option>
          <Select.Option value="Low" label="Low">
            <Tag color="gray">Low</Tag>
          </Select.Option>
        </Select>
        <Button type="primary" onClick={handleAddBtn}>
          Add
        </Button>
      </Input.Group>
    </div>
  );
};

export default TodoInput;
