import { createPinia, defineStore } from 'pinia';
import piniaPluginPersist from 'pinia-plugin-persistedstate';

const pinia = createPinia();
pinia.use(piniaPluginPersist);

const usePersistStore = defineStore('persistStore', {
  state: () => ({ bookId: '' }),
  getters: {
    getBookId: (state) => {
      return state.bookId;
    },
  },
  actions: {
    setBookId(value: string) {
      this.bookId = value;
    },
  },
  persist: true,
});

export default pinia;

export { usePersistStore };
