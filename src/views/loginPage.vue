<template>
  <div class="login">
    <n-form
      ref="formRef"
      label-width="auto"
      :model="formValue"
      :rules="rules"
      label-placement="left"
    >
      <n-form-item label="账套" path="user.name">
        <n-select
          v-model:value="formValue.user.bookId"
          :options="bookOptions"
          placeholder="选择账套"
          @update:value="bookChange"
        />
      </n-form-item>

      <n-form-item label="姓名" path="user.name">
        <n-input v-model:value="formValue.user.name" placeholder="输入姓名" />
      </n-form-item>
      <n-form-item label="年龄" path="user.age">
        <n-input v-model:value="formValue.user.age" placeholder="输入密码" />
      </n-form-item>
      <n-form-item>
        <n-button
          attr-type="button"
          type="primary"
          @click="handleValidateClick"
        >
          登陆
        </n-button>
      </n-form-item>
    </n-form>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { FormInst } from 'naive-ui';
import type { SelectOption } from 'naive-ui';

import http from '../alova/index.ts';
import { usePersistStore } from '../pinia/persistStore';

const store = usePersistStore();

const formValue = ref({
  user: {
    name: '',
    age: '',
    bookId: 'test1',
  },
});

const rules = {
  name: {
    required: true,
    message: '请输入姓名',
    trigger: 'blur',
  },
  age: {
    required: true,
    message: '请输入密码',
    trigger: ['input', 'blur'],
  },
};

const bookOptions = ref<SelectOption[]>([
  {
    label: 'test1',
    value: 'test1',
  },
]);

const formRef = ref<FormInst | null>(null);
const handleValidateClick = () => {
  console.log(formValue.value);
};

const fetchBookOptions = async () => {
  const books: any[] = await http.Post('/api/Factory/Books');

  bookOptions.value.splice(0, bookOptions.value.length);
  books.forEach((x) => {
    bookOptions.value.push({
      label: x.name,
      value: x.bookId,
    });
  });
};

onMounted(() => {
  fetchBookOptions();
});

const bookChange = (value: string) => {
  //console.log(store);
  store.setBookId(value);
};
</script>

<style scoped lang="less">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login form {
  height: 300px;
  padding-left: 200px;
  padding-top: 50px;
  background-color: aquamarine;
}
</style>
