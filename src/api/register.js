import request from './request'

export const register = (data) => {
    return request({
        url: '/user/register',
        method: 'POST',
        data
    })
}