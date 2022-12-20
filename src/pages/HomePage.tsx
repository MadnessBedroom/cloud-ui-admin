import { useMe } from "../hooks/useMe"

export const HomePage: React.FC = () => {
  const { data } = useMe()
  console.log(data)
  return <div>主页</div>
}