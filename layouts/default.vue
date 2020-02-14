<template>
  <div>
    <v-header></v-header>
    <nuxt />
  </div>
</template>
<script>
import VHeader from '@/components/header'
export default {
  components: {
    VHeader
  }
}
</script>
<style lang="less">
html {
  font-family: 'Source Sans Pro', '-apple-system', BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  body {
    background: #fafafa;
    transition: transform 0.2s cubic-bezier(0.4, 0.01, 0.165, 0.99),
      -webkit-transform 0.2s cubic-bezier(0.4, 0.01, 0.165, 0.99);
    &.side {
      position: fixed;
      transform: translate3D(250px, 0, 0);
      .i-menu {
        i {
          opacity: 0;
        }
        &:before {
          width: 24px;
          top: 25px;
          transform: rotate(-45deg);
        }
        &:after {
          width: 24px;
          bottom: 24px;
          transform: rotate(45deg);
        }
      }
    }
    .main-content {
      display: flex;
      min-height: 500px;
      margin: 20px auto;
      & > section {
        flex: 1;
        padding: 20px 15px 80px;
        margin-right: 270px;
        background: #fff;
        box-shadow: 0 0 10px 5px #eaeaea;
      }
    }
  }
}
</style>
