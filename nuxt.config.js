export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s' + ' - 面向 Google 编程',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '.net core,c#,vuejs,react'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          '博问,程序员问答社区,解决你的IT难题。博问是一套IT知识互动式问答分享平台。用户可以根据自身的需求,有针对性地提出问题,同时这些答案又将作为搜索结果,满足有相同或类似问题的用户需求。'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: '//at.alicdn.com/t/font_852729_lkb7rcj6b1n.css'
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.16.2/build/styles/solarized-light.min.css'
      }
    ],
    script: [
      {
        src:
          'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.16.2/build/highlight.min.js'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '~assets/global.less',
    '~assets/reset.less',
    '~/static/css/markdown.css',
    'ant-design-vue/lib/pagination/style/css',
    'ant-design-vue/lib/icon/style/css',
    'ant-design-vue/lib/row/style/css',
    'ant-design-vue/lib/col/style/css',
    'ant-design-vue/lib/anchor/style/css'
  ],
  styleResources: {
    less: './assets/vars/*.less'
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/antd-ui',
    '@/plugins/anchorHelper',
    '@/plugins/hightlight'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    credentials: true,
    proxyHeaders: true,
    proxy: true
  },
  proxy: {
    '/api/': {
      target:
        process.env.NODE_ENV === 'production'
          ? 'http://daydayup_api'
          : 'http://localhost:5000'
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    analyze: false,
    extractCSS: true,
    extend(config, ctx) {}
  }
}
