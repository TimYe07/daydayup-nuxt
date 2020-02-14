<template>
  <header>
    <div class="motto w pr">
      <nuxt-link to="/" class="logo">
        面向 Google 编程
      </nuxt-link>
      <span class="sub-title"
        >If you don't walk out, you will think that this is the whole
        world</span
      >
      <span class="i-menu" @click="toggleSidebar"><i></i></span>
    </div>
    <nav id="sidebar">
      <ul class="w" @click="toggleSidebar">
        <li
          v-for="(item, index) in navList"
          :key="index"
          :class="{ on: currentIndex === index }"
          @click="currentIndex = index"
        >
          <nuxt-link :to="{ path: item.route }">{{ item.title }}</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        { title: '首页', route: '/' },
        { title: '分类', route: '/categories' },
        { title: '标签', route: '/tags' }
        // { title: '归档', route: '/archives' },
        // { title: '关于', route: '/about' }
      ],
      currentIndex: 0
    }
  },
  mounted() {
    if (window.outerWidth <= 768) return
    window.addEventListener('scroll', this.handleScroll)
    switch (this.$route.name) {
      case 'index':
        this.currentIndex = 0
        break
      case 'categories':
        this.currentIndex = 1
        break
      case 'tags':
        this.currentIndex = 2
        break
      default:
        this.currentIndex = 4
        break
    }
  },
  methods: {
    handleScroll() {
      const scrolltop =
        document.documentElement.scrollTop || document.body.scrollTop
      const t = document.querySelector('#sidebar').getBoundingClientRect().top
      if (t <= 0) {
        document.querySelector('#sidebar').classList.add('fixed')
      }
      if (scrolltop < 70) {
        document.querySelector('#sidebar').classList.remove('fixed')
      }
    },
    toggleSidebar() {
      if (window.outerWidth < 768) {
        document.querySelector('body').classList.toggle('side')
      }
    }
  }
}
</script>

<style lang="less">
.logo {
  color: #24292e;
  text-decoration: none;
  font-size: 20px;
}
header {
  font-size: 0;
  background: #fff;
  .motto {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    font-size: 20px;

    .sub-title {
      padding-top: 10px;
    }
    .i-menu {
      display: none;
    }
  }
  nav {
    background: #252a2e;
    ul {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      list-style: none;
      font-size: 16px;
      padding: 0;
      li {
        height: 60px;
        line-height: 60px;
        cursor: pointer;
        color: #fff;
        a {
          color: inherit;
          text-decoration: none;
          display: block;
          padding: 0 15px;
        }
        &.on,
        &:hover {
          color: #fff;
          border-bottom: 5px solid #e26b46;
        }
      }
    }
    &.fixed {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
  }
}
</style>
