import { viteStaticCopy } from 'vite-plugin-static-copy'

export default {
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/@dziegelbein/downzip/dist/downzip-sw.js',
          dest: '.'
        }
      ]
    })
  ]
}