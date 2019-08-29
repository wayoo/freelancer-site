<template>
    <div class="comp-header">
        <div class="container">
            <div class="logo"></div>
            <div class="pull-right">
                <el-popover
                    popper-class="popup-qrcode"
                    placement="bottom"
                    width="200"
                    trigger="hover"
                    >
                    <!-- <el-button slot="reference">hover 激活</el-button> -->
                    <a class="link" slot="reference">服务者登录</a>

                    <slot>
                        <div class="qrcode-title">请您关注公众号登录</div>
                        <img class="qrcode" src="../../assets/pc/qrcode.jpeg" alt="">
                    </slot>
                </el-popover>
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
.popup-qrcode {
    border-radius: 0;
    padding: 0;
    box-shadow: 0 5px 5px 0 rgba(200, 222, 248, .65);


    .qrcode {
        display: block;
        width: 200px;
        height: 200px;
        margin: 0 auto;
    }

    .qrcode-title {
        text-align: center;
        font-size: 16px;
        color: #032c64;
        margin-top: 20px;
    }
}

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
        cursor: pointer;
    }
}
</style>
