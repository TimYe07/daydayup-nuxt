<template>
  <div class="main-content w">
    <section>
      <v-post-list
        :title="'当前分类：' + category.name"
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
    const categorySlug = params.slug
    const page = query.page === undefined ? 1 : query.page
    await store.dispatch('blog/getPosts', { page, categorySlug })
    await store.dispatch('blog/getCategory', categorySlug)
    await store.dispatch('blog/getAsideTags')
  },
  computed: {
    pagingPosts() {
      return this.$store.state.blog.pagingPosts
    },
    category() {
      return this.$store.state.blog.category
    }
  },
  methods: {
    async handleCurrentChange(val) {
      const categorySlug = this.$route.params.slug
      await this.$store.dispatch('blog/getPosts', { val, categorySlug })
      this.$router.push({
        path: this.$route.path,
        query: { page: val }
      })
    }
  },
  head() {
    const category = this.category
    return {
      title: category.name + ' - 分类'
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
