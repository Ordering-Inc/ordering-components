import AsyncStorage from '@react-native-async-storage/async-storage'

export class NativeStrategy {
  async getItem (storageKey, isJson) {
    (isJson)
      ? await JSON.parse(AsyncStorage.getItem(storageKey))
      : await AsyncStorage.getItem(storageKey)
  }

  async setItem (key, val, isJson = false) {
    const value = isJson ? JSON.stringify(val) : val
    await AsyncStorage.setItem(key, value)
  }

  async removeItem (key) {
    await AsyncStorage.removeItem(key)
  }
}
