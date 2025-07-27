import { ref } from 'vue'

export default function () {
    let user = ''
    let password = ''
    let dept = ref( 'top')
    function userLogin() {
        alert('登录成功')
        dept.value = 'x'
        console.log('用户名：', user)
        console.log('密码：', password)
        console.log('部门：', dept.value)
    }
    return {
        user,
        password,
        dept,
        userLogin
    }
}