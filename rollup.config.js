import buble from 'rollup-plugin-buble'

const pkg = require('./package.json')

export default {
  input: 'insert.js',
  output: {
    banner: `/*!
 * ${pkg.name} - ${pkg.description}
 * Version ${pkg.version}
 * Copyright (C) 2017-present JounQin <admin@1stg.me>
 * Released under the MIT license
 *
 * Github: https://github.com/JounQin/rollup-plugin-insert
 */`,
    exports: 'named',
    file: 'index.js',
    format: 'cjs',
  },
  plugins: [buble()],
  external: ['magic-string', 'rollup-pluginutils'],
}
