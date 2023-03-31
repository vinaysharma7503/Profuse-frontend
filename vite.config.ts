import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(),tsconfigPaths()],
  resolve:{
    alias:[
      {find:'~bootstrap',replacement:path.resolve(__dirname,'node_modules/bootstrap')},
      {find:'@RootService',replacement:path.resolve(__dirname,'./src/RootService')},
      {find:'@Shared',replacement:path.resolve(__dirname,'./src/Shared')},
      {find:'@Pages',replacement:path.resolve(__dirname,'./src/Pages')},
      {find:'@Redux',replacement:path.resolve(__dirname,'./src/Redux')},
    ]
  },
  server:{
    port:3000,
    host:true
  }
})
