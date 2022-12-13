import { useParams } from 'oh-router-react'

export const GameDetail: React.FC = () => {
  const { id } = useParams()
  return <div>比赛ID: {id}</div>
}
