import {
  DatePicker,
  Form,
  Input,
  InputNumber,
  message,
  Modal,
  Select,
} from 'antd'

export const AddGame: React.FC<IModalProps> = ({ isOpen, setOpen }) => {
  console.log('AddGame run!!!')
  const onSubmit = () => {
    message.warning('功能开发中')
  }
  return (
    <Modal
      title='添加比赛'
      okText='添加'
      open={isOpen}
      onCancel={() => setOpen(false)}>
      {/* <Form size={'large'} validateTrigger='onSubmit' onFinish={onSubmit}>
        <Form.Item
          label='比赛名称'
          name='game_title'
          rules={[{ required: true, message: '请输入比赛名称!' }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label='难度等级'
          name='game_level'
          rules={[{ required: true, message: 'hhh' }]}
        >
          <Select >
            <Select.Option value='2'>简单</Select.Option>
            <Select.Option value='1'>中等</Select.Option>
            <Select.Option value='0'>困难</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label='选择赛题'
          name='game_subjects'
          rules={[{ required: true, message: '至少选择一组赛题!' }]}
        >
          <Select defaultValue={'2'}>
          </Select>
        </Form.Item>
        <Form.Item
          name='game_desc'
          label='比赛描述'
          rules={[{ required: true, message: '请输入比赛描述!' }]}
        >
          <Input.TextArea maxLength={100} placeholder='简短的描述一下这场比赛吧!' />
        </Form.Item>
        <Form.Item
          name='game_end_time'
          label='结束时间'
          rules={[{ required: true, message: '请设置比赛结束时间!' }]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          name='people_num'
          label='参赛人数'
          rules={[{ required: true, message: '请输入比赛人数!' }]}
        >
          <InputNumber />
        </Form.Item>
      </Form> */}
    </Modal>
  )
}
