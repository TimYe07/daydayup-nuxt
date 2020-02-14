<template>
  <div class="main-content w">
    <a-row class="post">
      <a-col :xs="24" :md="18">
        <h1 class="post-title">{{ post.title }}</h1>
        <div class="post-meta">
          <span><a-icon type="calendar" />&nbsp;{{ post.createOn }}</span
          >&nbsp;&nbsp;
          <span><a-icon type="book" />&nbsp;{{ post.category.name }}</span>
        </div>
        <div v-highlight class="markdown-body" v-html="post.content"></div>
        <div v-if="post.tags.length > 0" class="tags-text">
          <a-icon type="tags" />
          <nuxt-link
            v-for="(tag, index) in post.tags"
            :key="index"
            :to="{ path: `/tags/${tag.slug}` }"
            class="post-tag"
          >
            {{ tag.name }}
          </nuxt-link>
        </div>
      </a-col>
      <a-col :xs="0" :md="1"></a-col>
      <a-col :xs="0" :md="4">
        <a-anchor wrapper-class="anchor-margin" :offset-top="84">
          <a-anchor-link
            v-for="anchor in anchors"
            :key="`${anchor.href}_${anchor.title}`"
            :href="anchor.href"
            :title="anchor.title"
          >
            <a-anchor-link
              v-for="subAnchor in anchor.subList"
              :key="`${subAnchor.href}_${subAnchor.title}`"
              :href="subAnchor.href"
              :title="subAnchor.title"
            />
          </a-anchor-link>
        </a-anchor>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  async fetch({ store, params, query }) {
    const slug = params.slug
    await store.dispatch('blog/getPost', slug)
  },
  data() {
    return {
      anchors: []
    }
  },
  computed: {
    post() {
      return this.$store.state.blog.post
    }
  },
  mounted() {
    this.generateToc()
  },
  methods: {
    generateToc() {
      this.anchors = this.$anchorHelper.generateAnchors(
        document.querySelector('.markdown-body')
      )
    }
  },
  head() {
    const post = this.post
    return {
      title: post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: post.summary
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: post.keywords
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
@media (max-width: 768px) {
  .post {
    margin-top: 56px;
    padding: 20px 32px;
    background: #fff;
    box-shadow: 0 0 10px 5px #eaeaea;
    width: 100%;
  }
}
@media (min-width: 767.9px) {
  .post {
    padding: 20px 32px;
    background: #fff;
    box-shadow: 0 0 10px 5px #eaeaea;
    width: 1200px;
  }
}

.post-title {
  font-size: 32px;
  font-weight: 500;
  padding-bottom: 16px;
}
.post-meta {
  padding-bottom: 16px;
}
.post-tag {
  position: relative;
  display: inline-block;
  padding: 3px 6px;
  font-size: 12px;
  text-align: center;
  border-radius: 2px;
  background-color: #eee;
  color: #666;
  margin-left: 5px;
  text-decoration: none;
}
</style>
