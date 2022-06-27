import React from "react";

import { Typography, Divider } from "antd";

import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

const App = () => {
  return (
    <section className="App">
      <div className="container">
        <Typography.Title
          level={2}
          style={{ textAlign: "center", fontSize: "24px", fontWeight: "bold" }}
        >
          Todo with Redux
        </Typography.Title>
        <TodoFilter />
        <Divider style={{ margin: "5px 0 10px" }} />
        <TodoList />
        <TodoInput />
      </div>
    </section>
  );
};

export default App;
