export class WebStrategy {
  async getItem (storageKey, isJson) {
    const value = await window.localStorage.getItem(storageKey)
    if (isJson && typeof value !== 'object') {
      return JSON.parse(value)
    }
    return value
  }

  async setItem (key, val, isJson) {
    const value = isJson ? JSON.stringify(val) : val
    await window.localStorage.setItem(key, value)
  }

  async removeItem (key) {
    await window.localStorage.removeItem(key)
  }
}
