import { Row, Col, Input, Typography, Radio, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  filterSearchChange,
  filterPrioritiesChange,
  filterStatusChange,
} from "./FilterSlice";

const { Search } = Input;

const TodoFilter = () => {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState("");
  const [status, setStatus] = useState("All");
  const [priorities, setPriorities] = useState([]);

  const handleChangeSearchTextChange = (e) => {
    setSearchText(e.target.value);
    dispatch(filterSearchChange(e.target.value));
  };

  const handleChangeStatusChange = (e) => {
    setStatus(e.target.value);
    dispatch(filterStatusChange(e.target.value));
  };

  const handleChangePrioritiesChange = (value) => {
    setPriorities(value);
    dispatch(filterPrioritiesChange(value));
  };

  return (
    <Row>
      <Col span={24} style={{ marginBottom: "15px" }}>
        <Typography.Paragraph className="title">Search</Typography.Paragraph>
        <Search
          placeholder="Enter name to search ..."
          value={searchText}
          onChange={handleChangeSearchTextChange}
        />
      </Col>
      <Col span={24} style={{ marginBottom: "15px" }}>
        <Typography.Paragraph className="title">
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={status} onChange={handleChangeStatusChange}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">Todo</Radio>
        </Radio.Group>
      </Col>
      <Col span={24} style={{ marginBottom: "15px" }}>
        <Typography.Paragraph className="title">
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode="multiple"
          allowClear
          style={{
            width: "100%",
          }}
          placeholder="Please select priority"
          value={priorities}
          onChange={handleChangePrioritiesChange}
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
      </Col>
    </Row>
  );
};

export default TodoFilter;
