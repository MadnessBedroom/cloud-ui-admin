import { Card, Form, Input } from "antd"

export const SystemPage: React.FC = () => {
  return <Card
    title={'系统设置'}
  >
    <Form>
      <Form.Item
        label='修改用户名'
        name='username'
        wrapperCol={{ span: 4 }}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='修改密码'
        name='username'
        wrapperCol={{ span: 4 }}
      >
        <Input />
      </Form.Item>
    </Form>
  </Card>
}
