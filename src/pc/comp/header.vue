<template>
    <div class="comp-header">
        <div class="container">
            <div class="logo"></div>
            <div class="pull-right">
                <a class="link" href="">服务者登录</a>
                <a class="link" href="https://admin.56work.cn" target="_blank">企业登录</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>


<style lang="less">
.comp-header {
    background: #4a8cff;
    height: 70px;
    line-height: 70px;

    .logo {
        display: inline-block;
        width: 115px;
        height: 37px;
        background: url("../../assets/pc/logo.png");
        margin-top: 14px;
    }

    .link {
        color: #fff;
        text-decoration: none;
        margin-left: 20px;
    }
}
</style>
