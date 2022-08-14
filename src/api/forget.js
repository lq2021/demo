import request from './request'

export const forget = (data) => {
    return request({
        url: '/user/forget',
        method: 'POST',
        data
    })
}