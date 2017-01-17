import fetch from 'isomorphic-fetch'

const UrlApi = 'http://jsonplaceholder.typicode.com'

const api = {
  posts: {
    async getList(page = 1) {
      const res = await fetch(`${UrlApi}/posts?_page=${page}`)
      const data = await res.json()
      return data
    },
    async getSingle(id = 1) {
       const res = await fetch(`${UrlApi}/posts/${id}`)
      const data = await res.json()
      return data
    },
    async getComments(id = 1) {
      const res = await fetch(`${UrlApi}/posts/${id}/comments`)
      const data = await res.json()
      return data
    }
  },
  users:{
    async getSingle(id = 1) {
      const res = await fetch(`${UrlApi}/users/${id}`)
      return await res.json()
    },
    async getPosts(id = 1){
      const res = await fetch(`${UrlApi}/posts/?userId=${id}`)
      return await res.json()
    }
  }
}

export default api