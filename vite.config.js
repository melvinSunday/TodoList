import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Todo App',
        short_name: 'TodoApp',
        description: 'A simple todo app built with Vite and React.',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/icons/todo_icon_192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icons/todo_icon_512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      'antd': 'antd/es',
    },
  },
});
