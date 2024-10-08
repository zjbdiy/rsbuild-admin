import { createAlova } from 'alova';
import adapterFetch from 'alova/fetch';
import { logger } from '@rsbuild/core';

const http = createAlova({
  requestAdapter: adapterFetch(),
  beforeRequest(method) {
    // method.config.headers.
  },
  cacheFor: null,
  responded: {
    onSuccess: async (response, method) => {
      if (response.status >= 400) {
        throw new Error(response.statusText);
      }
      const json = await response.json();
      if (json.statusCode === '500') {
        // 抛出错误或返回reject状态的Promise实例时，此请求将抛出错误
        throw new Error(json.message);
      }

      // 解析的响应数据将传给method实例的transform钩子函数，这些函数将在后续讲解

      //console.log(json.data);

      return json.data;
    },

    // 请求失败的拦截器
    // 请求错误时将会进入该拦截器。
    // 第二个参数为当前请求的method实例，你可以用它同步请求前后的配置信息
    onError: (err, method) => {
      console.log(err.message);
    },

    // 请求完成的拦截器
    // 当你需要在请求不论是成功、失败、还是命中缓存都需要执行的逻辑时，可以在创建alova实例时指定全局的`onComplete`拦截器，例如关闭请求 loading 状态。
    // 接收当前请求的method实例
    onComplete: async (method) => {
      // 处理请求完成逻辑
    },
  },
});

export default http;
