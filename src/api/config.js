let config = {
  // site: 'webapi.fusion.tst.zanservice.com',//请求接口地址
  site: '39.106.220.69:8092',//请求接口地址
  // method: '/api/v1'//域名后面的接口参数
  method: '/interface/dateService.do?returntype=2'
}
export const apiRoot = 'http://'.concat(config.site, config.method)
