import axios from '../utils/request'

export function cateAdd(data: any) {
  return axios({
    url: '/cate/add',
    method: 'post',
    data
  })
}
