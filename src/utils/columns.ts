const handleColumns = (keyArr: any) => {
  return keyArr
    .filter((k: string) => k in tableTitleMap)
    .map((key: string) => {
      switch (key) {
        case 'status':
          return {
            title: tableTitleMap[key],
            key: key,
            render: (g: Game) => (
              <Badge
                color= { colorTools.getStatusColor(g.status) }
                text={ statusMap[g.status]}
            />
            ),
          }
        case 'people_num':
return {
  title: tableTitleMap[key],
  key,
  render: (g: Game) => {
    return `${g.people_count}/${g.people_num} 人`
  },
}
        case 'level':
return {
  title: tableTitleMap[key],
  key,
  render: (g: Game) => {
    return (
      <Tag color= { colorTools.getLevelColor(g.level) } >
      { levelMap[g.level]}
      < /Tag>
              )
  },
}
        case 'created_at':
return {
  title: tableTitleMap[key],
  key,
  render: (g: Game) => {
    return moment(g.created_at).format('YYYY-MM-DD')
  },
}
        default:
return {
  title: tableTitleMap[key],
  key: key,
  dataIndex: key,
}
      }
    }) as Array<any>
}