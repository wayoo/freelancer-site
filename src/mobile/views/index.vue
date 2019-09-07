<template>
    <div class="page-index">
        <Header></Header>
        <!-- <div class="md-example-child md-example-child-drop-menu md-example-child-drop-menu-0">
            <md-drop-menu :data="data" />
        </div> -->
        <div class="mod-intro">
            <div class="title">壹薪网</div>
            <div class="desc">合法合规的众包互助平台</div>
            <div class="text">壹薪网是专注为企业提供众包互助服务及费用结算的互联网共享服务平台；
                <br> 针对企业临时人员改造劳动关系，合规降低企业成本，
                <br>防止不合规经营产生的税务稽查风险。</div>
            <div class="icon-intro"></div>
        </div>

        <div class="mod-provide">
            <div class="title">
                我们能为您的企业提供
            </div>
            <div class="text">
                壹薪网能够通过专业化的成本分析模型来为您的企业量身定做众包互助方案，以合法、合规的方式为您的企业<em>减少社保成本</em>；
                通过对企业临时人员改造劳动关系来<em>降低人员流动成本</em>，并且可以有效解决<em>劳务用工无发票</em>的问题；
                我们将用平台化来安全有效地为您连接每一位服务者，使您的企业有效减少<em>季节性用工成本</em>；
                并且我们相比传统用工平台更加合规化，选择壹薪网可以让您的企业最大化<em>降低用工风险</em>。
            </div>
            <div class="icon-provide"></div>
            <div class="icon-bg"></div>
        </div>

        <div class="mod-panel">
            <div class="panel-hd">
                <div class="panel-title">服务者接单</div>
                <div class="panel-desc">ORDERS PROCESSING</div>
            </div>
            <div class="row" v-for="(item, k) in feature" :key="k">
                <template v-if="k % 2 === 0">
                    <div class="col">
                        <img :class="`img-${k+1}`" :src="require(`../../assets/mobile/images/feature/${k+1}.png`)" alt="">
                    </div>
                    <div class="col">
                        <div class="title">{{ item.title }}</div>
                        <div class="text" v-html="item.desc"></div>
                    </div>
                </template>
                <template v-else>
                    <div class="col">
                        <div class="title">{{ item.title }}</div>
                        <div class="text" v-html="item.desc"></div>
                    </div>
                    <div class="col">
                        <img :class="`img-${k+1}`" :src="require(`../../assets/mobile/images/feature/${k+1}.png`)" alt="">
                    </div>
                </template>
            </div>
        </div>

        <div class="mod-panel dark">
            <div class="panel-hd">
                <div class="panel-title">企业用工</div>
                <div class="panel-desc">ENTERPRISE EMPLOYMENT</div>
            </div>
            <div class="feature-list">
                <div class="item" v-for="(item, n) in feature_two" :key="n">
                    <div class="img-wrap">
                        <img :src="require(`../../assets/mobile/images/feature/0001/${n+1}.png`)" alt="">
                    </div>
                    <div class="title">{{ item.title }}</div>
                    <div class="desc" v-html="item.desc"></div>
                </div>
            </div>
        </div>

        <div class="mod-panel dark">
            <div class="panel-hd">
                <div class="panel-title">行业覆盖</div>
                <div class="panel-desc">INDUSTRY SCOPE</div>
            </div>
            <div class="mini-list">
                <div class="mini-item" v-for="(item, n) in feature_three" :key="n">
                    <img :src="require(`../../assets/pc/images/feature/0002/${n+1}.png`)" alt="">
                    <div class="title">{{ item.title }}</div>
                </div>
            </div>
        </div>

        <md-popup ref="popup" v-model="isPopupShow.center" class="contact-popup">
            <md-icon name="close" size="lg" @click="hidePopup"></md-icon>
            <div class="title">
                申请企业用工优化解决方案
            </div>
            <div class="desc">
                请放心，我们不会泄露您的隐私，并且只在工作时间内与您联系。
            </div>
            <div class="form">
                <input class="text-input" v-model="form.company_name" type="text" placeholder="您的企业名称是？">
                <input class="text-input" v-model="form.person_name" type="text" placeholder="我们怎么称呼您？">
                <input class="text-input" v-model="form.persion_mobile" type="text" placeholder="您的联系方式是？">
                <md-button :loading="isLoading.top" type="default" class="btn" @click="getContact">获取解决方案</md-button>
            </div>
        </md-popup>

        <div class="contact">
            <div class="title">
                欢迎联系我们
            </div>
            <div class="desc">
                为您的企业定制化众包互助解决方案
            </div>
            <div class="row">
                <div class="col">
                    <div class="icon-contact"></div>
                </div>
                <div class="col btn-wrap">
                    <md-button class="get-contact" type="primary" @click="showPopup">点击获取解决方案</md-button>
                </div>
            </div>
        </div>

        <div class="footer">北京蜗牛企服科技有限公司™   鲁ICP备19039591号-1</div>
    </div>
</template>


<script>
import Header from '../comp/header.vue';
import api from '../../api/index';

export default {
    components: {
        Header,
    },
    data() {
        return {
            form: {
                company_name: '',
                person_name: '',
                persion_mobile: '',
            },
            isLoading: {
                top: false,
            },
            isPopupShow: {
                center: false
            },
            feature: [
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
        showPopup() {
            this.isPopupShow.center = true;
        },
        hidePopup() {
            this.isPopupShow.center = false;
        },
        verifyForm(data) {
            if(!data.company_name) {
                return this.$toast.failed('请输入公司名字');
            }
            if(!data.person_name) {
                return this.$toast.failed('请输入联系人名字');
            }
            if(!data.persion_mobile) {
                return this.$toast.failed('请输入联系电话');
            }

            return true;
        },
        getContact() {
            if (this.verifyForm(this.form) !== true) {
                return;
            }

            this.isLoading.top = true;
            api.contact(this.form).then(res => {
                this.$toast.succeed('工作人员会及时与您联系~');
                this.isPopupShow.center = false;
                this.isLoading.top = false;
            }, () => {
                this.isLoading.top = false;
            })
        },
    }
}
</script>


<style lang="less">
.page-index {
    .mod-intro {
        background: #4a8cff;
        color: #fff;
        padding: 300px 70px 400px;
        position: relative;

        .title {
            font-size: 60px;
            margin-bottom: 15px;
        }
        .desc {
            font-size: 36px;
            color: #103669;
            margin-bottom: 15px;
        }
        .text {
            font-size: 18px;
            line-height: 30px;
        }

        .icon-intro {
            background: url("../../assets/mobile/images/intro.png");
            width: 619px;
            height: 398px;
            background-size: 619px 398px;
            position: absolute;
            bottom: -150px;
            left: 50%;
            margin-left: -309px;
        }
    }

    .mod-provide {
        padding: 420px 70px 760px;
        position: relative;

        .title {
            text-align: center;
            font-size: 36px;
            color: #4a8cff;
            margin-bottom: 30px;
        }

        .text {
            color: #032c64;
            font-size: 18px;
            line-height: 30px;

            em {
                font-style: normal;
                color: #4a8cff;
            }
        }

        .icon-provide {
            background: url("../../assets/mobile/images/provide.png");
            width: 517px;
            height: 436px;
            background-size: 517px 436px;
            position: absolute;
            left: 50%;
            margin-left: -258px;
            top: 700px;
            z-index: 100;
        }

        .icon-bg {
            background: #4a8cff;
            height: 280px;
            transform: skewY(30deg);
            position: absolute;
            width: 100%;
            left: 0;
            top: 960px;
        }
    }

    .mod-panel {
        .panel-hd {
            padding: 0 70px;
        }

        &.dark {
            padding-top: 120px;
            background: #4a8cff;

            .panel-title {
                color: #fff;
                border-bottom: 1px solid #fff;
            }
            .panel-desc {
                color: #fff;
            }
        }

        .panel-title {
            font-size: 36px;
            color: #4a8cff;
            border-bottom: 1px solid #4a8cff;
            display: inline-block;
            padding-bottom: 10px;
            margin-bottom: 10px;
        }

        .panel-desc {
            color: #e9eaeb;
            font-weight: bold;
            font-size: 24px;
            margin-bottom: 90px;
        }

        .row {
            display: flex;
            padding: 60px 0;

            .col {
                flex: 1;

                img {
                    display: block;
                    margin: 0 auto;
                }

                .img-1 {width: 224px;}
                .img-2 {width: 240px;}
                .img-3 {width: 260px;}
                .img-4 {width: 285px;}
                .img-5 {width: 280px;}
                .img-6 {width: 224px;}

                .title {
                    margin-top: 80px;
                    font-size: 30px;
                    color: #103669;
                    text-align: center;
                    margin-bottom: 30px;
                }
                .text {
                    font-size: 18px;
                    color: #383c41;
                    text-align: center;
                    line-height: 30px;
                }
            }


        }


        .feature-list {
            display: flex;
            flex-wrap: wrap;


            .item {
                height: 280px;
                padding-top: 50px;
                width: 50%;
                text-align: center;

                .img-wrap {
                    height: 90px;
                    img {
                        height: 100%;
                        width: auto;
                    }
                    margin-bottom: 15px;
                }

                .title {
                    font-size: 30px;
                    color: #103669;
                    margin-bottom: 25px;
                }
                .desc {
                    font-size: 18px;
                    color: #fff;
                    line-height: 30px;
                }
            }
        }

        .mini-list {
            padding: 0 70px 50px;
            display: flex;
            flex-wrap: wrap;

            .mini-item {
                width: 25%;
                text-align: center;

                img {
                    height: 80px;
                }

                font-size: 18px;
                color: #fff;

                .title {
                    margin-top: 15px;
                    margin-bottom: 40px;
                }
            }
        }
    }


    .contact {
        padding: 150px 70px;

        .title {
            font-size: 36px;
            color: #4a8cff;
            margin-bottom: 25px;
        }

        .desc {
            font-size: 24px;
            color: #103669;
            margin-bottom: 200px;
        }

        .row {
            display: flex;

            .col {
                flex: 1;
            }

            .icon-contact {
                background: url("../../assets/mobile/images/contact.png");
                width: 279px;
                height: 335px;
                background-size: 279px 335px;
            }
        }
    }

    .footer {
        line-height: 50px;
        background: #4a8cff;
        text-align: center;
        font-size: 18px;
        color: #103669;
    }

    .btn-wrap {
        overflow: hidden;
        padding-left: 80px;
        padding-top: 200px;
    }

    .get-contact {
        font-size: 24px;
        height: 70px;
    }


    .contact-popup .md-popup-box{
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding-top: 120px;
        background: #383c41;

        padding: 165px 70px;
        text-align: center;
        color: #fff;


        .md-icon-close {
            font-size: 64px;
            float: right;
            margin-right: -30px;
        }

        .title {
            font-size: 48px;
            margin-bottom: 30px;
            margin-top: 100px;
        }
        .desc {
            font-size: 20px;
            margin-bottom: 145px;
        }

        .form {
            padding: 0 25px;

            .md-button {
                font-size: 24px;
                line-height: 72px;
                height: 72px;
            }

            .text-input {
                display: block;
                background: #2b6ee2;
                height: 72px;
                width: 560px;
                margin: 0 auto;
                box-sizing: border-box;
                border: none;
                text-align: center;
                margin-bottom: 50px;
                outline: none;
                color: #fff;

                &::placeholder{
                    color: #fff;
                }
            }

            .btn {
                margin-top: 80px;
            }
        }
    }
}
</style>
