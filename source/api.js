const baseUrl = "http://jsonplaceholder.typicode.com"

const api = {
  posts: {
    async getList(page = 1) {
      const response = await fetch(`${baseUrl}/posts?_page=${page}`)
      return await response.json()
    },
    async getSingle(id = 1) {
      const response = await fetch(`${baseUrl}/posts/${id}`)
      return await response.json()
    },
    async getComments(id = 1) {
      const response = await fetch(`${baseUrl}/posts/${id}/comments`)
      return await response.json()
    }
  },
  users: {
    async getSingle(id = 1) {
      const response = await fetch(`${baseUrl}/users/${id}`)
      return await response.json()
    }
  }
}

export default api