import {apiRoot} from './config'
// const material = '/material'
// const message = '/message'

let wxApiUrl = {}
// wxApiUrl.getMaterials = material + 's' // 获取素材列表
//
// wxApiUrl.getMessage = message + 's' // 获取消息列表
// wxApiUrl.postMessage = message + '/read_receipt' // 消息已读回执
wxApiUrl.PostHome = apiRoot//请求执行的地址

export default wxApiUrl
