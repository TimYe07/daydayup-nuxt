<template>
  <div class="main-content w">
    <section>
      <v-post-list
        :title="'最新文章'"
        :posts="pagingPosts.values"
      ></v-post-list>
      <div class="paging__center">
        <a-pagination
          hide-on-single-page
          :current="pagingPosts.page"
          :page-size="pagingPosts.limit"
          :total="pagingPosts.total"
          @change="handleCurrentChange"
        >
        </a-pagination>
      </div>
    </section>
    <v-sider-bar />
  </div>
</template>

<script>
import VPostList from '@/components/post-list'
import VSiderBar from '@/components/sidebar'

export default {
  components: {
    VPostList,
    VSiderBar
  },
  filters: {
    abstractFormat(val) {
      return val.replace(/<[^>]+>/g, '').substring(0, 200)
    },
    formatDate(val) {
      return val ? val.substring(0, 19) : ''
    }
  },
  async fetch({ store, query }) {
    const page = query.page === undefined ? 1 : query.page
    await store.dispatch('blog/getPosts', { page })
    await store.dispatch('blog/getAsideTags')
  },
  computed: {
    pagingPosts() {
      return this.$store.state.blog.pagingPosts
    }
  },
  methods: {
    async handleCurrentChange(val) {
      await this.$store.dispatch('blog/getPosts', val)
      this.$router.push({
        path: this.$route.path,
        query: { ...this.$route.query, page: val }
      })
    }
  },
  head() {
    return {
      title: '首页'
    }
  }
}
</script>
<style lang="less" scoped>
.paging__center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
