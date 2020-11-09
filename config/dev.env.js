'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

// 开发环境接口配置
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ROOT: '"//localhost:8880/api"'
})
