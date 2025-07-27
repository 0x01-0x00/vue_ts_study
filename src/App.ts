import { ref } from 'vue'

export default function () {
    let user = ref( '')
    let password = ref( '')
    let dept = ref( '')
    function userLogin() {
        alert('登录成功')
        dept.value = 'top'
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