import {
  getPosts,
  getCategories,
  getTags,
  getCategory,
  getTag,
  getPost
} from '@/api/posts'

export const state = () => ({
  pagingPosts: {},
  pagingTags: {},
  pagingCategories: {},
  post: {},
  category: {},
  tag: {},
  asideTags: []
})

export const mutations = {
  setPagingPosts(state, data) {
    state.pagingPosts = data
  },
  setPagingTags(state, data) {
    state.pagingTags = data
  },
  setPagingCategories(state, data) {
    state.pagingCategories = data
  },
  setPost(state, data) {
    state.post = data
  },
  setTag(state, data) {
    state.tag = data
  },
  setCategory(state, data) {
    state.category = data
  },
  setAsideTags(state, data) {
    state.asideTags = data.values
  }
}

export const actions = {
  async getPosts({ commit }, params) {
    const res = await getPosts(params)
    commit('setPagingPosts', res)
  },
  async getTags({ commit }, params) {
    const res = await getTags(params)
    commit('setPagingTags', res)
  },
  async getAsideTags({ commit }) {
    const res = await getTags({ page: 1 })
    commit('setAsideTags', res)
  },
  async getCategories({ commit }, params) {
    const res = await getCategories(params)
    commit('setPagingCategories', res)
  },
  async getPost({ commit }, slug) {
    const res = await getPost(slug)
    commit('setPost', res)
  },
  async getCategory({ commit }, slug) {
    const res = await getCategory(slug)
    commit('setCategory', res)
  },
  async getTag({ commit }, slug) {
    const res = await getTag(slug)
    commit('setTag', res)
  }
}
