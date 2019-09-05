<template>
    <div class="comp-header">
        <div class="logo"></div>
        <div class="pull-right" @click="toggleMenu">
            <i class="icon icon-menu"></i>
        </div>
        <div v-if="isMenuShow" class="menu">
            <a class="item" href="https://m.56work.cn">服务者登录</a>
            <a class="item" @click="showAlert">商家登录</a>
        </div>
    </div>
</template>


<script>
import {Dialog} from 'mand-mobile';


export default {
    data() {
        return {
            isMenuShow: false,
        }
    },

    methods: {
        showAlert(){
            Dialog.alert({
                content: '请您通过PC浏览器进行访问商家后台',
                cancelText: '取消',
                confirmText: '确定',
                onConfirm: () => console.log('[Dialog.alert] confirm clicked'),
            })
        },
        toggleMenu() {
            if (this.isMenuShow) {
                this.isMenuShow = false;
            } else {
                this.isMenuShow = true;
            }
        }
    }
}
</script>

<style lang="less">
.comp-header {
    height: 120px;
    background: #4a8cff;
    position: fixed;
    width: 100%;
    z-index: 10001;

    // .logo {
    //     display: inline-block;
    //     width: 98px;
    //     height: 35px;
    //     background: url("../../assets/mobile/images/logo.png");
    //     background-size: 98px 35px;
    //     margin: 12px 0 0 12px;
    // }
    .logo {
        display: inline-block;
        width: 196px;
        height: 70px;
        background: url("../../assets/mobile/images/logo.png");
        background-size: 196px 70px;
        margin: 24px 0 0 24px;
    }

    .icon-menu {
        display: inline-block;
        width: 45px;
        height: 37px;
        background: url("../../assets/mobile/images/menu.png");
        background-size: 45px 37px;
        margin: 40px 40px 0 0;
    }

    .menu {
        z-index: 100;
        top: 120px;
        right: 40px;
        position: absolute;
        width: 200px;
        background: #4a8cff;
        line-height: 80px;
        text-align: right;

        .item {
            display: block;
            color: #fff;
            text-decoration: none;
            font-size: 36px;
        }
    }
}
</style>
