import request from '@/utils/request'

export function getPosts(params) {
  return request.get('/api/posts/', {
    params
  })
}

export function getPost(slug) {
  return request.get(`/api/posts/${slug}`)
}

export function getTags(params) {
  return request.get('/api/tags', {
    params
  })
}

export function getTag(slug) {
  return request.get(`/api/tags/${slug}`)
}

export function getCategories(params) {
  return request.get('/api/categories', {
    params
  })
}

export function getCategory(slug) {
  return request.get(`/api/categories/${slug}`)
}
