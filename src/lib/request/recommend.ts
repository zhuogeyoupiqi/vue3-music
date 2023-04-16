import request from './index'

interface ManageResult<T> {
  code: number,
  banners: T
}
export const getBanner = ():Promise<ManageResult<[]>> => request.get('/banner?type=2')