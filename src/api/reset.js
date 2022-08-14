import request from './request'

export const reset = (data) => {
    return request({
        url: '/user/reset',
        method: 'POST',
        data
    })
}