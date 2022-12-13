const itemKey = 'token'

// 获取token
export const getToken = () => {
  if (
    typeof window.localStorage !== 'undefined' &&
    localStorage.getItem(itemKey)
  ) {
    return localStorage.getItem('token')
  }

  return undefined
}

// 设置token
export const setToken = (token: string) => {
  return window.localStorage.setItem(itemKey, token)
}

// 移除token
export const removeToken = () => {
  return window.localStorage.removeItem(itemKey)
}
