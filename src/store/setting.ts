export const useSettingStore = defineStore('setting', () => {
  const config = reactive({
    boy: '申明辉',
    girl: '孟冰冰',
  })
  return { config }
})
