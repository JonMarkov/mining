let config = {
  //请求接口地址
  // site: 'webapi.fusion.tst.zanservice.com',
  site: '39.106.220.69:8093',
  //域名后面的接口参数
  // method: '/api/v1'
  method: '/interface/dateService.do?returntype=2'
}
export const apiRoot = 'http://'.concat(config.site, config.method)
