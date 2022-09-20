---
home: true
heroText: Hh Blog
tagline: Teaching is the best way to learn. ✨
bgImageStyle: { color: '#fff' }
bgImage: '/bj.jpeg'
isShowTitleInHome: false
---

<script>
import Typed from 'typed.js';
export default {
    mounted() {
        this.$nextTick(() => {
            this.handleScroll();
        })
        window.addEventListener('scroll', this.handleScroll, true);
        this.carryOutTyped(); // 输入效果
        const ifJanchor = document.getElementById("JanchorDown");
        ifJanchor && ifJanchor.parentNode.removeChild(ifJanchor);
        let a = document.createElement('a');
        a.id = 'JanchorDown';
        a.className = 'anchor-down';
        document.getElementsByClassName('hero')[0].append(a);
        let targetA = document.getElementById("JanchorDown");
        targetA.addEventListener('click', e => { // 添加点击事件
            this.scrollFn();
        })
    },
    methods: {
        scrollFn() {
            const windowH = document.getElementsByClassName('hero')[0].clientHeight - 56; // 获取窗口高度
            document.documentElement.scrollTop = windowH; // 滚动条滚动到指定位置
        },
        carryOutTyped() {
            let parentDom = document.querySelector(".home-blog > div > div");
            let eleTyped = document.createElement('span');
            eleTyped.className = 'eleTyped';
            parentDom.appendChild(eleTyped);
            var typed = new Typed('.eleTyped', {
                strings: ["我是一名前端", "副业工地搬砖", "工资只够早餐", "上班只为下班", "每晚都要加班", "只求线上平安", "头发快要掉完", "前端真的好难"], //输入内容, 支持html标签
                typeSpeed: 100, //打字速度
                backSpeed: 50, //回退速度
                loop: true // 循环
            });
        },
        handleScroll () {
            const windowH = document.getElementsByClassName('hero')[0].clientHeight - 56; // 获取窗口高度
            let navbar = document.querySelector(".navbar");
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if(scrollTop < windowH) {
                navbar.classList.add('hidden');
            } else {
                navbar.classList.remove('hidden');
            }
        }
    },
    destroyed () {
        // 离开该页面需要移除这个监听的事件，不然会报错
        let navbar = document.querySelector(".navbar");
        navbar.classList.remove('hidden');
        window.removeEventListener('scroll', this.handleScroll, true)
    }
}
</script>

<style>
.navbar.hidden {
    background: transparent !important;
    box-shadow: none !important;
}
.navbar.hidden > .links {
    background: transparent !important;
}
.navbar.hidden .site-name,
.navbar.hidden .nav-link {
    color: #fff !important;
}
.navbar.hidden .nav-link.router-link-active {
    color: #3eaf7c !important;
}
.home-blog > .hero {
    margin: 0 !important;
}
.anchor-down {
    display: block;
    margin: 12rem auto 0;
    bottom: 45px;
    width: 20px;
    height: 20px;
    font-size: 34px;
    text-align: center;
    animation: bounce-in 5s 3s infinite;
    position: absolute;
    left: 50%;
    bottom: 30%;
    margin-left: -10px;
    cursor: pointer;
}
@-webkit-keyframes bounce-in {
    0% {
        transform: translateY(0);
    }
    20% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-20px);
    }
    80% {
        transform: translateY(0);
    }
    to {
        transform: translateY(0);
    }
}
.anchor-down::before {
    content: '';
    width: 20px;
    height: 20px;
    display: block;
    border-right: 3px solid #fff;
    border-top: 3px solid #fff;
    transform: rotate(135deg);
    position: absolute;
    bottom: 10px;
}
.anchor-down::after {
    content: '';
    width: 20px;
    height: 20px;
    display: block;
    border-right: 3px solid #fff;
    border-top: 3px solid #fff;
    transform: rotate(135deg);
}
.eleTyped,
.typed-cursor {
    font-size: 1.6rem;
    vertical-align: top;
    display: inline-block;
    height: 30px;
}
.reco-bgm-box {
    z-index: 1 !important;
}
@media (max-width: 715px) {
    .eleTyped,
    .typed-cursor{
        font-size: 1.2rem;
        height: 27px;
    }
    .anchor-down {
        bottom: 10%;
    }
    .reco-bgm-box {
        display: none !important;
    }
}
</style>
