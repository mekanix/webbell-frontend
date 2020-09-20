export default class SocialStore {
  constructor(detail, list) {
    this.detail = detail[0]
    this.setDetail = detail[1]
    this.list = list[0]
    this.setList = list[1]
  }

  fetchAll = async () => {
    try {
      const response = await window.rest.get('/socials')
      const result = {
        ...response.data,
        ok: true
      }
      this.setList(result)
      return result
    } catch (error) {
      return {
        ...error,
        ok: false,
      }
    }
  }

  fetch = async (id) => {
    try {
      const response = await window.rest.get(`/socials/${id}`)
      const result = {
        ...response.data,
        ok: true
      }
      this.setDetail(result)
      return result
    } catch (error) {
      return {
        ...error,
        ok: false,
      }
    }
  }

  edit = async (id, data) => {
    try {
      const response = await window.rest.patch(`/socials/${id}`, data)
      const result = {
        ...response.data,
        ok: true
      }
      this.setDetail(result)
      return result
    } catch (error) {
      return {
        ...error,
        ok: false,
      }
    }
  }

  getCount = async () => {
    try {
      const response = await window.rest.get('/socials/count')
      const result = {
        ...this.list,
        ...response.data,
        ok: true
      }
      this.setList(result)
      return result
    } catch (error) {
      return {
        ...error,
        ok: false,
      }
    }
  }
}
