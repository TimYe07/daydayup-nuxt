<template>
  <div class="main-right">
    <div class="focus">
      <h2>常用标签</h2>
      <ul class="band ac">
        <li v-for="(tag, index) in asideTags" :key="index">
          <nuxt-link
            :to="{ path: `/tags/${tag.name}` }"
            :style="{ background: colors[index] }"
            >{{ tag.name }}</nuxt-link
          >
        </li>
      </ul>
      <h2>友情链接</h2>
      <ul class="band">
        <li>
          <a href="https://gianthard.rocks/" target="_blink"
            >Jerry - 网上冲浪指南</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        '#036463',
        '#E8673F',
        '#3EB7AB',
        '#FE4163',
        '#FB9C9A',
        '#83AC9A',
        '#859513'
      ]
    }
  },
  computed: {
    asideTags() {
      return this.$store.state.blog.asideTags
    }
  }
}
</script>

<style lang="less">
.main-right {
  position: absolute;
  top: 150px;
  right: calc((100% - 1200px) / 2);
  width: 250px;
  min-height: 250px;
  padding: 20px 15px;
  background: #fff;
  box-shadow: 0 0 10px 5px #eaeaea;
  h2 {
    font-size: 16px;
    line-height: 36px;
    border-bottom: 1px solid #ccc;
  }
  .third-account {
    display: flex;
    padding: 10px 0;
    margin-bottom: 20px;
    .account-box {
      width: 50px;
      cursor: pointer;
      .iconfont {
        font-size: 32px;
      }
      p {
        margin-top: 3px;
      }
    }
  }
  .user-info {
    padding-top: 10px;
    text-align: center;
    font-size: 12px;
    img {
      width: 50px;
      border-radius: 50%;
    }
    input {
      background: #f90;
      color: #fff;
      padding: 3px 8px;
      border-radius: 3px;
      border: 1px solid transparent;
      &:hover {
        background: #f70;
        border-color: #f10;
      }
    }
  }
  .band {
    display: flex;
    flex-wrap: wrap;
    padding: 10px 0;
    li {
      a {
        display: block;
        padding: 5px 8px;
        margin: 5px;
        color: #fff;
        background: #036463;
        text-decoration: none;
        border-radius: 3px;
      }
    }
  }
  &.fixed {
    position: fixed;
    top: 70px;
  }
}
</style>
