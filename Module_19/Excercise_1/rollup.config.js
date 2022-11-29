export default {
    input: './index.js',
    output: {
      file: './bundle.js',
      format: 'cjs'
    },
    watch: {
      exclude: 'node_modules/**'
    },
  };