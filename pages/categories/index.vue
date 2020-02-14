<template>
  <div class="main-content w">
    <section>
      <v-category-list
        :title="'分类'"
        :categories="pagingCategories.values"
      ></v-category-list>
      <div class="paging__center">
        <a-pagination
          hide-on-single-page
          :current="pagingCategories.page"
          :page-size="pagingCategories.limit"
          :total="pagingCategories.total"
          @change="handleCurrentChange"
        >
        </a-pagination>
      </div>
    </section>
    <v-sider-bar />
  </div>
</template>

<script>
import VCategoryList from '@/components/category-list'
import VSiderBar from '@/components/sidebar'

export default {
  components: {
    VCategoryList,
    VSiderBar
  },
  async fetch({ store, query }) {
    const page = query.page === undefined ? 1 : query.page
    await store.dispatch('blog/getCategories', { page })
    await store.dispatch('blog/getAsideTags')
  },
  computed: {
    pagingCategories() {
      return this.$store.state.blog.pagingCategories
    }
  },
  methods: {
    async handleCurrentChange(val) {
      await this.$store.dispatch('blog/getCategories', val)
      this.$router.push({
        path: this.$route.path,
        query: { ...this.$route.query, page: val }
      })
    }
  },
  head() {
    return {
      title: '分类'
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
