<template>
  <div class="article-list-wrap">
    <h2 class="page-subject">{{ title }}</h2>
    <ul class="articles">
      <li v-for="(item, index) in posts" :key="index">
        <div class="news-inner">
          <h3>
            <nuxt-link :to="{ path: '/post/' + item.slug }">{{
              item.title
            }}</nuxt-link>
          </h3>
          <p class="news-extract">
            {{ item.description }}
            <nuxt-link :to="{ path: '/post/' + item.slug }">阅读全文</nuxt-link>
          </p>
          <p class="extro-info">
            <span class="brand"
              ><i class="iconfont icon-Shapecopy"></i
              >{{ item.category.name }}</span
            >
            <span class="create_time"
              ><i class="iconfont icon-shijian"></i
              >{{ item.createOn | formatDate }}</span
            >
          </p>
        </div>
      </li>
    </ul>
    <div v-if="!posts.length" class="no-data">暂无数据</div>
  </div>
</template>

<script>
export default {
  filters: {
    abstractFormat(val) {
      return val.replace(/<[^>]+>/g, '').substring(0, 100)
    },
    formatDate(val) {
      return val ? val.replace('T', ' ').substring(0, 16) : ''
    }
  },
  props: {
    posts: {
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
  }
}
</script>

<style lang="less">
.article-list-wrap {
  flex: 1;
  order: 1;
  .articles {
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 16px 0;
      position: relative;
      border-bottom: #e1e4e8 1px solid;
      figure {
        width: 150px;
        img {
          display: block;
          width: 125px;
          height: 100px;
        }
      }
      .news-inner {
        flex: 1;
        color: #586069;
        h3 {
          font-size: 16px;
          font-weight: bold;
          transition: all 0.5s;
          margin-bottom: 10px;
          a {
            color: #252a2e;
            text-decoration: none;
          }
        }
        .news-extract {
          line-height: 22px;
          a {
            color: #e26b46;
            padding-left: 5px;
          }
        }
        .extro-info {
          margin: 10px 0;
          display: inline-block;
          color: #999;
          span {
            .iconfont {
              color: #d0835a;
              margin-right: 6px;
            }
            & + span {
              margin-left: 20px;
            }
          }
        }
      }
    }
  }
  .loadmore {
    text-align: center;
    padding: 20px 0;
  }
  .no-data {
    margin: 30px 0;
    text-align: center;
  }
}
</style>
