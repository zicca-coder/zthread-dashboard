/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: fulei🐰
 * @Date: 2025-06-07 09:41:08
 * @LastEditors: fulei🐰
 * @LastEditTime: 2025-06-29 16:45:49
 */
import { defineConfig } from '@vben/vite-config';
import ElementPlus from 'unplugin-element-plus/vite';
import * as console from "node:console";

export default defineConfig(async () => {
  return {
    application: {},
    vite: {
      plugins: [
        ElementPlus({
          format: 'esm',
        }),
      ],
      server: {
        proxy: {
          // 精确匹配所有/api开头的请求
          '^/api/': {
            target: 'http://localhost:10100',
            changeOrigin: true,
            // 路径重写：移除/api前缀，替换为/api/zthread-dashboard
            rewrite: (path) => {
              const newPath = path.replace(/^\/api/, '/api/zthread-dashboard');
              console.log(`[Proxy Log] Proxying ${path} -> ${newPath}`);
              return newPath;
            },
            ws: true,
            configure: (proxy, options) => {
              proxy.on('error', (err, req, res) => {
                console.log(`[Proxy Error] ${req.url}:`, err);
              });
              proxy.on('proxyReq', (proxyReq, req, res) => {
                console.log(`[Proxy Request] ${req.method} ${req.url} -> ${options.target}${proxyReq.path}`);
              });
              proxy.on('proxyRes', (proxyRes, req, res) => {
                console.log(`[Proxy Response] ${req.url} -> ${proxyRes.statusCode}`);
              });
            }
          }
        },
      },
    },
  };
});
