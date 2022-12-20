class Session {
  key: string
  constructor() {
    this.key = 'me'
  }

  set(key: string, value: any) {
    window.sessionStorage.setItem(key, JSON.stringify(value))
  }
}

export default new Session()
