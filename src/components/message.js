import { createVNode, render } from 'vue'
import MessageComponent from './Message.vue'

//全局message组件
const Message = (options) => {
    const container = document.createElement('div')
    const vm = createVNode(MessageComponent, options)
    render(vm, container)
    let time = options.time || 2000
    let timer = setTimeout(() => {
        render(null, container)
        clearTimeout(timer)
    }, time)
    document.body.appendChild(container.firstElementChild)
}

export default Message