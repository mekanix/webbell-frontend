export default class MedicStore {
  constructor(detail, list) {
    this.detail = detail[0]
    this.setDetail = detail[1]
    this.list = list[0]
    this.setList = list[1]
  }

  fetchAll = async () => {
    try {
      const response = await window.rest.get('/medics')
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
      const response = await window.rest.get(`/medics/${id}`)
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
      const response = await window.rest.patch(`/medics/${id}`, data)
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

  create = async (title, name, specialty, academic, city) => {
    try {
      const response = await window.rest.post(
        '/medics',
        { title, name, specialty, academic, city },
      )
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
      const response = await window.rest.get('/medics/count')
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
