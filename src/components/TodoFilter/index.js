import { Row, Col, Input, Typography, Radio, Select, Tag } from "antd";

const { Search } = Input;
const { Option } = Select;

const TodoFilter = () => {
  return (
    <Row>
      <Col span={24} style={{ marginBottom: "15px" }}>
        <Typography.Paragraph className="title">Search</Typography.Paragraph>
        <Search placeholder="Enter TodoName to search ..." />
      </Col>
      <Col span={24} style={{ marginBottom: "15px" }}>
        <Typography.Paragraph className="title">
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group>
          <Radio value="All">All</Radio>
          <Radio value="Todo">Completed</Radio>
          <Radio value="Completed">Completed</Radio>
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
