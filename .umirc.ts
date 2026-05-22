import { defineConfig } from '@umijs/max';

export default defineConfig({
  // 本地跨域代理，解决localhost:8080请求跨域
  proxy: {
    '/': {
      target: 'http://localhost:8080',
      changeOrigin: true,
    },
  },
});
