import { LoginForm } from '../../components/LoginForm'
import s from './style.module.scss'

export const LoginPage: React.FC = () => {
  return (
    <div className={s['container']}>
      <LoginForm style={s} />
    </div>
  )
}
