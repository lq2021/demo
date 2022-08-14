//防抖 
export const debounce = function(func, wait, immediate) {
    let timeout;
    if (!wait) {
        wait = 1000
    }
    if (!immediate) {
        immediate = true
    }
    return function() {
        let context = this;
        let args = arguments;
        if (timeout) clearTimeout(timeout); // timeout 不为null
        if (immediate) {
            let callNow = !timeout; // 第一次会立即执行，以后只有事件执行后才会再次触发
            timeout = setTimeout(function() {
                timeout = null;
            }, wait);
            if (callNow) {
                func.apply(context, args);
            }
        } else {
            timeout = setTimeout(function() {
                func.apply(context, args);
            }, wait);
        }
    };
};


//验证邮箱
export const isEmail = (email) => {
    const reg = /[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
    return reg.test(email)
}

//检测密码强度
export const testPassword = (pwd) => {
    let level = 0
    if (pwd.length < 8) {
        return level
    }
    if (/[a-z]/.test(pwd)) {
        level++
    }
    if (/[A-Z]/.test(pwd)) {
        level++
    }

    return level
}