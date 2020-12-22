export class WebStrategy {
  async getItem (storageKey, isJson) {
    if (isJson) {
      return await JSON.parse(window.localStorage.getItem(storageKey))
    }
    return await window.localStorage.getItem(storageKey)
  }

  async setItem (key, val, isJson) {
    const value = isJson ? JSON.stringify(val) : val
    await window.localStorage.setItem(key, value)
  }

  async removeItem (key) {
    await window.localStorage.removeItem(key)
  }
}
