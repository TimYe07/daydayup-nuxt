<template>
  <div class="article-list-wrap">
    <h2 class="page-subject">{{ title }}</h2>
    <ul class="band ac">
      <li
        v-for="(tag, index) in tags"
        :key="index"
        :class="{ on: $route.path.includes(tag.name) }"
      >
        <nuxt-link
          :to="{ path: `/tags/${tag.slug}` }"
          :style="{ background: colors[index] }"
          >{{ tag.name }}</nuxt-link
        >
      </li>
    </ul>
    <div v-if="!tags.length" class="no-data">暂无数据</div>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      required: false,
      default() {
        return []
      }
    },
    title: {
      type: String,
      required: true
    }
  },
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
  }
}
</script>

<style lang="less">
.article-list-wrap {
  flex: 1;
  order: 1;
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
  .no-data {
    margin: 30px 0;
    text-align: center;
  }
}
</style>
