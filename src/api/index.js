import wxApiUrl from './resource'
// import {get, post} from '../common/http'
import store from '../store'
import axios from 'axios'
export default {
  // async getMaterials(param) {
  //   let query = {
  //     title: '',
  //     materialType: param.materialType,
  //     personId: store.state.person.personId,
  //     page: param.page,
  //     limit: 20
  //   }
  //   let data = await axios.get(wxApiUrl.getMaterials, query)
  //   return data
  // },
  // async getMessage(param) {
  //   let query = {
  //     personId: store.state.person.personId,
  //     read: param.read,
  //     page: param.page,
  //     limit: 10
  //   }
  //   let data = await axios.get(wxApiUrl.getMessage, query)
  //   return data
  // },
  async PostHome(query) {
    console.log(query)
    let data = await axios.post(wxApiUrl.PostHome, JSON.stringify(query))
    console.log(data)
    return data
  }
}
