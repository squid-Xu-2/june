import axios from '../utils/request'

export function cateAdd(data: any) {
  return axios({
    url: '/cate/add',
    method: 'post',
    data
  })
}

export function cateList(params: any) {
  return axios({
    url: '/cate/list',
    method: 'get',
    params
  })
}
