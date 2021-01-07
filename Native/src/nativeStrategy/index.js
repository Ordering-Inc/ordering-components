import AsyncStorage from '@react-native-async-storage/async-storage'

export class NativeStrategy {
  async getItem (storageKey, isJson) {
    const value = await AsyncStorage.getItem(storageKey)
    if (isJson && typeof value !== 'object') {
      return JSON.parse(value)
    }
    return value
  }

  async setItem (key, val, isJson = false) {
    const value = isJson ? JSON.stringify(val) : val
    await AsyncStorage.setItem(key, value)
  }

  async removeItem (key) {
    await AsyncStorage.removeItem(key)
  }
}
