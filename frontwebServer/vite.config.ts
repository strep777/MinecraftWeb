import path from 'path'
import type { PluginOption } from 'vite'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const { VITE_API_URL } = env;
  return {
    define: {
    },
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), 'src'),
        '@gc': path.resolve(process.cwd(), 'src/components/common'),
        '@st': path.resolve(process.cwd(), 'src/store'),
        '@app':path.resolve(process.cwd(),'src/plugins/app'),
        '@libs':path.resolve(process.cwd(),'src/plugins/libs'),
      },
    },
    plugins:[
      vue({reactivityTransform: true,}),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    server: {
      host: '0.0.0.0',
      port: 8080,
      open: false,
    },
    build: {
      reportCompressedSize: false,
      sourcemap: false,
      commonjsOptions: {
        ignoreTryCatch: false,
      },
    },
  }
})
