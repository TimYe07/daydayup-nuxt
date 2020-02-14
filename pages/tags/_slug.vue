<template>
  <div class="main-content w">
    <section>
      <v-post-list
        :title="'当前标签：' + tag.name"
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
  async fetch({ store, params, query }) {
    const tagSlug = params.slug
    const page = query.page === undefined ? 1 : query.page
    await store.dispatch('blog/getPosts', { page, tagSlug })
    await store.dispatch('blog/getTag', tagSlug)
    await store.dispatch('blog/getAsideTags')
  },
  computed: {
    pagingPosts() {
      return this.$store.state.blog.pagingPosts
    },
    tag() {
      return this.$store.state.blog.tag
    }
  },
  methods: {
    async handleCurrentChange(val) {
      const tagSlug = this.$route.params.slug
      await this.$store.dispatch('blog/getPosts', { val, tagSlug })
      this.$router.push({
        path: this.$route.path,
        query: { ...this.$route.query, page: val }
      })
    }
  },
  head() {
    const tag = this.tag
    return {
      title: tag.name + ' - 标签'
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
