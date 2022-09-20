<template>
	<div>
		<h2 id="vuepress-plugin-sakura" tabindex="-1"><a class="header-anchor" href="#vuepress-plugin-sakura" aria-hidden="true">#</a> vuepress-plugin-sakura</h2>
		<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3>
		<p><code v-pre>npm install vuepress-plugin-sakura -D</code></p>
		<p>or</p>
		<p><code v-pre>yarn add vuepress-plugin-sakura -D</code></p>
		<div class="language-javascript ext-js line-numbers-mode">
			<pre v-pre class="language-javascript"><code>// 只要把这个放进 config的plugins中就可以了
[
    'sakura',
    {
        num: 20, // 默认数量
        show: true, //  是否显示
        zIndex: -1, // 层级
        img: {
            replace: false, // false 默认图 true 换图 需要填写httpUrl地址
            httpUrl: '', // 绝对路径
        },
    },
];
</code></pre>
			<div class="line-numbers" aria-hidden="true">
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
			</div>
		</div>
	</div>
</template>
