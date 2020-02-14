<template>
  <div class="main-content w">
    <section>
      <v-tag-list :title="'标签'" :tags="pagingTags.values"></v-tag-list>
      <div class="paging__center">
        <a-pagination
          hide-on-single-page
          :current="pagingTags.page"
          :page-size="pagingTags.limit"
          :total="pagingTags.total"
          @change="handleCurrentChange"
        >
        </a-pagination>
      </div>
    </section>
    <v-sider-bar />
  </div>
</template>

<script>
import VTagList from '@/components/tag-list'
import VSiderBar from '@/components/sidebar'

export default {
  components: {
    VTagList,
    VSiderBar
  },
  async fetch({ store, query }) {
    const page = query.page === undefined ? 1 : query.page
    await store.dispatch('blog/getTags', { page })
    await store.dispatch('blog/getAsideTags')
  },
  computed: {
    pagingTags() {
      return this.$store.state.blog.pagingTags
    }
  },
  methods: {
    async handleCurrentChange(val) {
      await this.$store.dispatch('blog/getTags', val)
      this.$router.push({
        path: this.$route.path,
        query: { page: val }
      })
    }
  },
  head() {
    return {
      title: '标签'
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
