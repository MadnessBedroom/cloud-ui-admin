import { Form, Input, message } from 'antd'
import { FormEventHandler } from 'react'
import { setToken } from '../utils/token'
import { router as r } from '../routes'
import { userApi } from '../apis'
import logo from '../assets/react.svg'
import { useLoginStore } from '../stores'

interface Props {
  style: Record<string, string>
}

export const LoginForm: React.FC<Props> = (props) => {
  const { style } = props
  const { data, setData } = useLoginStore()
  const onFinish: FormEventHandler<HTMLFormElement> = async (values: any) => {
    const { data } = await userApi.login(values)
    setToken(data.resource.token)
    r.navigate('/')
    message.success('登录成功')
  }

  return (
    <div className={style['formWrapper']}>
      <div className={style['formHeader']}>
        <img src={logo} />
        <h1>CloudAdmin</h1>
      </div>
      <Form name='basic' onFinish={onFinish} autoComplete='off'>
        <Form.Item
          name='username'
          rules={[{ required: true, message: '请输入账号!' }]}>
          <Input
            value={data.username}
            onChange={(e) => setData({ username: e.target.value })}
            placeholder='账号'
            className={style['customInput']}
          />
        </Form.Item>

        <Form.Item
          name='password'
          rules={[{ required: true, message: '请输入密码!' }]}>
          <Input
            value={data.password}
            onChange={(e) => setData({ password: e.target.value })}
            placeholder='密码'
            type='password'
            className={style['customInput']}
          />
        </Form.Item>
        <Form.Item
          name='code'
          rules={[{ required: true, message: '请输入验证码!' }]}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Input
              value={data.code}
              onChange={(e) => setData({ code: e.target.value })}
              placeholder='验证码'
              className={style['customInput']}
              style={{ flex: 1 }}
            />
            <span style={{ textAlign: 'center', width: '20%' }}>验证码</span>
          </div>
        </Form.Item>
        <button type='submit' className={style['loginButton']}>
          登录
        </button>
      </Form>
    </div>
  )
}
