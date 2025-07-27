import {reactive, ref} from 'vue'

export default function () {
    let user = ref( '')
    let password = ref( '')
    let dept = ref( '')
    let info = reactive({address: '', hobby: '', phone: ''})
    function userLogin() {
        alert('登录成功')
        dept.value = 'top'
        console.log('用户名：', user)
        console.log('密码：', password)
        console.log('部门：', dept.value)
        userInfo()
    }
    function userInfo() {
        // alert('保存成功')
        info.address = '合肥'
        info.hobby = '看电影'
        info.phone = '18269776130'
        console.log(info)
    }
    return {
        user,
        password,
        dept,
        info,
        userLogin,
        // userInfo,
    }
}