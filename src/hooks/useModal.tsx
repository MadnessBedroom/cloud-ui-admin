import { Modal, ModalProps } from 'antd'
import { createRef, useState } from 'react'

interface IModal {
  onOk: () => void
}

export const useModal = (props: ModalProps, Slot: any) => {
  const [visible, setVisible] = useState<boolean>(false)
  const open = () => {
    setVisible(true)
  }
  const close = () => {
    setVisible(false)
  }
  const MyModal = (slotProps: any) => {
    const onCancel = () => {
      close()
    }
    const ref = createRef<IModal>()
    const ok = () => {
      ref.current?.onOk()
    }
    return (
      <Modal
        onCancel={onCancel}
        onOk={ok}
        open={visible}
        cancelText={'关闭'}
        {...props}>
        <Slot slotRef={ref} {...slotProps} />
      </Modal>
    )
  }

  return {
    MyModal,
    open,
  }
}
