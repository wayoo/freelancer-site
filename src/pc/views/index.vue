<template>
    <div class="page-index">
        <Header></Header>
        <div class="container">
            <section class="section-banner">
                <div class="pull-left intro">
                    <div class="main-title">壹薪网</div>
                    <div class="sub-title">合法合规的企业众包互助平台</div>
                    <div class="desc">壹薪网是专注为企业提供众包互助业务众包服务及费用结算的互联网共享服务平台； <br>
针对企业临时人员改造劳动关系，合规降低企业成本，<br>防止社保入税后不合规经营产生的税务稽查风险。</div>

                    <el-popover
                        placement="right-start"
                        popper-class="popup-get-contact"
                        width="800"
                        trigger="click"
                    >
                    <div class="btn primary" slot="reference">立即深度了解></div>

                    <slot>
                        <div class="title">申请企业用工优化解决方案</div>
                        <div class="form">
                            <input class="input" type="text" placeholder="您的企业名称是？" v-model="form.company_name">
                            <input class="input" type="text" placeholder="我们怎么称呼您？" v-model="form.person_name">
                            <input class="input" type="text" placeholder="您的联系方式是？" v-model="form.persion_mobile">
                        </div>
                        <div class="desc">请放心，我们不会泄露您的隐私，并且只在工作时间内与您联系。</div>
                        <div class="btn" @click="getContact"
                            v-loading="isLoading.top"
                            element-loading-spinner="el-icon-loading"
                            >获取解决方案</div>
                    </slot>
                    </el-popover>

                </div>
                <div class="banner pull-right"></div>
            </section>
        </div>

        <div class="advantage">
            <div class="container">
                <div class="banner-advance"></div>
                <div class="content">
                    <div class="title">我们能为您的企业提供</div>
                    <div class="text">壹薪网能够通过专业化的成本分析模型来为您的企业量身定做众包互助方案，
                        以合法、合规的方式为您的企业<em>减少社保成本</em>；
                        通过对企业临时人员改造劳动关系来<em>降低人员流动成本</em>，
                        并且可以有效解决<em>劳务用工无发票</em>的问题；
                        我们将用平台化来安全有效地为您连接每一位服务者，
                        使您的企业有效<em>减少季节性用工成本</em>；
                        并且我们相比传统用工平台更加合规化，选择壹薪网可以让您的企业最大化<em>降低用工风险</em>。</div>
                </div>
            </div>
        </div>

        <div class="feature">
            <div class="container">
                <div class="feature-title">服务者接单</div>
                <div class="feature-desc">ORDERS PROCESSING</div>
                <div class="feature-list">
                    <div class="feature-row">
                        <div class="feature-item" v-for="(item, n) in feature_one" :key="n">
                            <div class="item-wrap" :class="{
                                'br': n % 3 === 0,
                                'bl': n % 3 === 2,
                                'bb': n < 3,
                            }">
                                <img :src="require(`../../assets/pc/images/feature/0000/${n+1}.png`)" alt="">
                                <div class="title">{{ item.title }}</div>
                                <div class="desc" v-html="item.desc"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="feature">
            <div class="container">
                <div class="feature-title">企业用工</div>
                <div class="feature-desc">ENTERPRISE EMPLOYMENT</div>
                <div class="feature-list">
                    <div class="feature-row">
                        <div class="feature-item" v-for="(item, n) in feature_two" :key="n">
                            <div class="item-wrap" :class="{
                                'br': n % 3 === 0,
                                'bl': n % 3 === 2,
                                'bb': n < 3,
                            }">
                                <img :src="require(`../../assets/pc/images/feature/0001/${n+1}.png`)" alt="">
                                <div class="title">{{ item.title }}</div>
                                <div class="desc" v-html="item.desc"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="feature">
            <div class="container">
                <div class="feature-title">行业覆盖</div>
                <div class="feature-desc">INDUSTRY SCOPE</div>
                <div class="feature-list">
                    <div class="mini-item" v-for="(item, n) in feature_three" :key="n">
                        <img :src="require(`../../assets/pc/images/feature/0002/${n+1}.png`)" alt="">
                        <div class="title">{{ item.title }}</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer-banner">
            <div class="container">
                <div class="pull-left join-form">
                    <div class="form-title">申请企业用工优化专家方案</div>
                    <input class="form-input" type="text" placeholder="请输入您的企业名称" v-model="formBottom.company_name">
                    <input class="form-input" type="text" placeholder="请输入联系人" v-model="formBottom.persion_mobile">
                    <input class="form-input" type="text" placeholder="请输入您的联系方式" v-model="formBottom.person_name">
                    <div class="btn block" @click="getContactBottom"
                        v-loading="isLoading.bottom"
                        element-loading-spinner="el-icon-loading"
                        >获取解决方案</div>
                </div>
                <div class="pull-right corp-intro">
                    <div class="corp-title">合法合规的企业众包互助平台</div>
                    <div class="corp-name">壹薪网</div>
                    <div class="corp-desc">
我们是专注为企业提供众包互助业务众包服务及费用结算的互联网共享服务平台 <br>
针对企业临时人员改造劳动关系，合规降低企业成本 <br>
防止社保入税后不合规经营产生的税务稽查风险 <br>
让我们来聊一聊，为您的企业减少可观的运营成本 <br>
期待您的联系 <br>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '../comp/header';
import Footer from '../comp/footer';
import api from '../../api/index';

export default {
    components: {
        Header,
        Footer,
    },
    data() {
        return {
            form: {
                company_name: '',
                person_name: '',
                persion_mobile: '',
            },
            formBottom: {
                company_name: '',
                person_name: '',
                persion_mobile: '',
            },
            isLoading: {
                top: false,
                bottom: false,
            },
            feature_one: [
                {
                    title: '实名认证',
                    desc: '对接公安部公民网络身份识别系统<br>对个人真实身份进行认证'
                },
                {
                    title: '电子签名',
                    desc: '采用安全可靠的电子签名技术(E签宝)<br>实现安全合规有效的服务协议'
                },
                {
                    title: '个体工商户',
                    desc: '在线快速协助办理及验证个体工商户信息<br>确保每个服务者都是个体工商户'
                },
                {
                    title: '即时抢单',
                    desc: '企业发布任务包后实时推送服务者<br>随时随地接单获得任务佣金'
                },
                {
                    title: '结算透明',
                    desc: '任务完成后商家根据标准批量验收<br>验收结果透明、高效'
                },
                {
                    title: '安全钱包',
                    desc: '任务结算完成，佣金立即转入个人账户<br>安全快速且随时可查'
                }
            ],
            feature_two: [
                {
                    title: '一键发单',
                    desc: '无需填写复杂的招工启示，简单填写用工需求<br>即可快速发单，还支持自动化定时任务'
                },
                {
                    title: '智能匹配',
                    desc: '智能快速匹配所需服务者，为保护企业隐私<br>也可以灵活指定相关服务者'
                },
                {
                    title: '任务验收',
                    desc: '针对服务者完成的任务，可以根据企业标准<br>高效安全的批量审核验收'
                },
                {
                    title: '用工放心',
                    desc: '根据企业的需求随时随地可以<br>查看服务者认证信息及任务记录'
                },
                {
                    title: '覆盖广泛',
                    desc: '业务覆盖各行各业<br>服务者可覆盖全国各地'
                },
                {
                    title: '平台保障',
                    desc: '平台固化整个任务流程及佣金结算的流程记录<br>用工安全合规有保障'
                }
            ],
            feature_three: [
                {title: '生活服务类'},
                {title: '物流配送类'},
                {title: '传统企业类'},
                {title: '互联网平台'},
                {title: '资讯营销类'},
                {title: '教育平台类'},
                {title: '培训服务类'},
                {title: '呼叫中心类'},
            ]
        }
    },
    methods: {
        verifyForm(data) {
            if(!data.company_name) {
                return this.$message.error('请输入公司名字');
            }
            if(!data.person_name) {
                return this.$message.error('请输入联系人名字');
            }
            if(!data.persion_mobile) {
                return this.$message.error('请输入联系电话');
            }

            return true;
        },
        getContact() {
            if (this.verifyForm(this.form) !== true) {
                return;
            }

            this.isLoading.top = true;
            api.contact(this.form).then(res => {
                this.$message({
                    message: '我们的工作人员会及时与您取得联系~',
                    type: 'success'
                });
                this.isLoading.top = false;
            }, () => {
                this.isLoading.top = false;
            })
        },
        getContactBottom() {
            if (this.verifyForm(this.formBottom) !== true) {
                return;
            }

            this.isLoading.bottom = true;
            api.contact(this.formBottom).then(res => {
                this.$message({
                    message: '我们的工作人员会及时与您取得联系~',
                    type: 'success'
                });
                this.isLoading.bottom = false;
            }, () => {
                this.isLoading.bottom = false;
            })
        }
    }
}
</script>

<style lang="less">
.popup-get-contact {
    background: #4a8cff;
    color: #fff;

    .title {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 30px;
    }

    .form {
        margin-bottom: 20px;

        .input {
            width: 170px;
            height: 35px;
            border: none;
            padding: 0 10px;
            background: #2b6ee2;
            color: #fff;
            margin-right: 24px;

            &::placeholder{
                color: #fff;
            }
        }
    }

    .desc {
        font-size: 14px;
        padding-bottom: 20px;
    }

    .btn {
        position: absolute;
        width: 120px;
        height: 35px;
        text-align: center;
        right: 25px;
        bottom: 25px;
        background: #fff;
        color: #263044;
        line-height: 35px;
        cursor: pointer;
    }
}

.popup-get-contact[x-placement^=right] .popper__arrow::after {
    border-right-color: #4a8cff;
}


.page-index {
    .section-banner {
        padding-top: 100px;
        position: relative;
        overflow: hidden;
        padding-bottom: 180px;
    }

    .banner {
        display: inline-block;
        width: 640px;
        height: 400px;
        background: url("../../assets/pc/banner.png");
    }

    .intro {
        position: absolute;
        left: 0;
        top: 160px;


        .main-title {
            font-size: 48px;
            color: #4a8cff;
            margin-bottom: 20px;
        }

        .sub-title {
            font-size: 36px;
            color: #282828;
            margin-bottom: 20px;
        }

        .desc {
            font-size: 12px;
            color: #323335;
            line-height: 20px;
            margin-bottom: 60px;
        }

    }

    .btn {
        background: #4a8cff;
        line-height: 48px;
        padding: 0 20px;
        color: #fff;
        display: inline-block;
        border-radius: 3px;

        &.block {

            display: block;
            text-align: center;
        }
    }

    .advantage {
        position: relative;
        overflow: hidden;
        margin-bottom: 220px;

        .container {
            position: relative;
            z-index: 1000;
        }

        &::before {
            top: 37px;
            content: ' ';
            z-index: 10;
            position: absolute;
            width: 100%;
            height: 220px;
            background: #f1f5fc;
        }

        .banner-advance {
            width: 354px;
            height: 295px;
            float: left;
            background: url("../../assets/pc/advance.png");
        }
        .content {
            width: 780px;
            float: right;
            text-align: right;
            padding-top: 60px;

            .title {
                font-size: 36px;
                color: #032c64;
                margin-bottom: 20px;
            }

            .text {
                text-align: left;
                font-size: 16px;
                color: #032c64;
                line-height: 30px;

                em {
                    color: #4a8cff;
                    font-style: normal;
                }
            }
        }
    }


    .feature {
        text-align: center;
        margin-bottom: 150px;

        .feature-list {
            overflow: hidden;

        }

        .feature-title {
            font-size: 36px;
            color: #002866;
            display: inline-block;
            padding-bottom: 5px;
            border-bottom: 4px solid #4a8cff;
            margin-bottom: 10px;
        }

        .feature-desc {
            font-size: 24px;
            color: #e9eaeb;
            margin-bottom: 70px;
        }

        .mini-item {
            width: 142px;
            height: 142px;
            float: left;

            img {
                margin-top: 20px;
                margin-bottom: 10px;
            }

            .title {
                font-size: 20px;
                color: #032c64;
            }

            &:hover {
                transition: ease-in .3s background-color;
                color: #fff;
                background: #4a8cff;

                .title {
                    color: #fff;
                }
                .desc {
                    display: block;
                }
            }
        }

        .feature-row {
            overflow: hidden;

            .feature-item {
                width: 33.33%;
                float: left;

                .title {
                    font-size: 30px;
                    color: #002866;
                    margin-top: 20px;
                }

                .desc {
                    margin-top: 20px;
                    font-size: 18px;
                    line-height: 25px;
                    display: none;
                }


                .item-wrap {
                    height: 300px;

                    &.br {
                        border-right: 2px solid #f1f5fc;
                    }
                    &.bl {
                        border-left: 2px solid #f1f5fc;
                    }
                    &.bb {
                        border-bottom: 2px solid #f1f5fc;
                    }

                    &:hover {
                        transition: ease-in .3s background-color;
                        color: #fff;
                        background: #4a8cff;

                        .title {
                            color: #fff;
                        }
                        .desc {
                            display: block;
                        }
                    }
                }

                img {
                    margin-top: 50px;
                    height: 100px;
                    width: auto;
                }
            }
        }
    }

    .footer-banner {
        height: 360px;
        background: url("../../assets/pc/footer-banner.jpg");

        .container {
            padding-top: 60px;
        }

        .join-form {
            width: 280px;
            color: #fff;

            .form-title {
                font-size: 22px;
                margin-bottom: 20px;
            }

            .btn {
                line-height: 40px;
                font-size: 14px;
            }


            .form-input {
                display: block;
                height: 40px;
                line-height: 40px;
                width: 100%;
                border: none;
                padding: 0 10px;
                box-sizing: border-box;
                background: #1c2433;
                margin-bottom: 10px;
                color: #fff;
            }
        }

        .corp-intro {
            color: #ffffff;
            width: 720px;
            text-align: right;
            font-size: 18px;
            font-weight: bold;
            line-height: 30px;

            .corp-title {
                font-size: 36px;
                color: #4a8cff;
                margin-bottom: 30px;
            }

            .corp-name {
                border-left: 5px solid #4a8cff;
                display: inline-block;
                padding-left: 10px;
                line-height: 20px;
            }
        }
    }
}
</style>
