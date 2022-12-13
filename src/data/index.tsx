const tableTitleMap: Record<string, string> = {
  title: '名称',
  status: '比赛状态',
  people_num: '参赛人数',
  level: '难度等级',
  created_at: '创建时间',
}

const statusMap: Record<number, string> = {
  0: '未开始',
  1: '进行中',
  2: '已结束',
}

const levelMap: Record<number, string> = {
  0: '困难',
  1: '中等',
  2: '简单',
}

export { tableTitleMap, statusMap, levelMap }
