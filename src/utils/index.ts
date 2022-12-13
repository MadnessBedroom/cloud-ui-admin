const getStatusColor = (statusCode: number) => {
  switch (statusCode) {
    case 0:
      return 'yellow'
    case 1:
      return 'green'
    case 2:
      return 'grey'
    default:
      return undefined
  }
}

const getLevelColor = (levelCode: number) => {
  switch (levelCode) {
    case 0:
      return 'red'
    case 1:
      return 'yellow'
    case 2:
      return 'green'
    default:
      return undefined
  }
}

export { getStatusColor, getLevelColor }
