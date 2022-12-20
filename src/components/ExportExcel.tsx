import { Input, Modal, Select } from 'antd'
import { useState } from 'react'

type TSelectValue = 'unStart' | 'started' | 'ended' | 'all'
const { Option } = Select
export const ExportExcel: React.FC<IModalProps> = (props) => {
  console.log('excel run!!!')
  const { isOpen, setOpen } = props
  const [fileName, setFileName] = useState<string>('')
  const [selectValue, setSelectValue] = useState<TSelectValue>('all')

  const onOk = () => {
    console.log('onOk')
  }

  return (
    <Modal
      open={isOpen}
      title='导出Excel'
      okText='导出'
      onCancel={() => setOpen(false)}
      onOk={onOk}>
      <Input.Group compact>
        <Select
          autoFocus={true}
          defaultValue='all'
          style={{ width: '20%' }}
          onSelect={(val: any) => setSelectValue(val)}
          value={selectValue}>
          <Option value='unStart'>未开始</Option>
          <Option value='started'>进行中</Option>
          <Option value='ended'>已结束</Option>
          <Option value='all'>所有</Option>
        </Select>
        <Input
          style={{ width: '80%' }}
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
          placeholder='文件名称'
        />
      </Input.Group>
    </Modal>
  )
}
