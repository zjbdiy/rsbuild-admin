<template>
  <div>
    <n-form
      ref="formRef"
      inline
      :label-width="80"
      :model="formValue"
      :rules="rules"
    >
      <n-form-item label="姓名" path="user.name">
        <n-select
          v-model:value="formValue.user.bookId"
          :options="bookOptions"
          placeholder="选择账套"
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
import { ref } from 'vue';
import { FormInst } from 'naive-ui';
import type { SelectOption } from 'naive-ui';

const formValue = ref({
  user: {
    name: '',
    age: '',
    bookId: '',
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

const bookOptions = ref<SelectOption[]>();

const formRef = ref<FormInst | null>(null);
const handleValidateClick = () => {
  console.log(formValue.value);
};
</script>

<style scoped></style>
