import request from '@/utils/request'

export function getTraceInfoByOrder(orderId) {
  console.log('start getTraceInfoByOrder', orderId)
  return request({
    url: '/api/v1.0/trace/getTraceInfoByOrder',
    method: 'get',
    params: { orderId }
  })
}

