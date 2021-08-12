const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')
require('dotenv').config()

const PORT = process.env.PORT || 8080
const ACCESS_KEY = process.env.USNPLASH_ACCESS_KEY

const targetUrl = 'https://api.unsplash.com'

const app = express()

app.use(
  '/unsplash-proxy',
  createProxyMiddleware({
    target: targetUrl,
    changeOrigin: true,
    pathRewrite: path => path.replace('/unsplash-proxy', ''),
    onProxyReq: proxyReq => {
      proxyReq.setHeader('Authorization', `Client-ID ${ACCESS_KEY}`)
    },
  })
)

app.listen(PORT)
