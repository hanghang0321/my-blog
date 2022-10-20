const CompressionPlugin = require('compression-webpack-plugin');
const VuePressPluginCodeCopy = require('./vuepress-plugin-code-copy/index');
module.exports = {
	title: 'Hh Blog',
	description: '正在努力加载中...',
	dest: 'dist',
	// base: './',
	locales: {
		'/': {
			lang: 'zh-CN',
		},
	},
	head: [
		[
			'link',
			{
				rel: 'icon',
				href: 'favicon.ico',
			},
		],
		[
			'meta',
			{
				name: 'viewport',
				content: 'width=device-width,initial-scale=1,user-scalable=no',
			},
		],
	],
	theme: 'reco',
	themeConfig: {
		mode: 'auto',
		noFoundPageByTencent: false,
		valineConfig: {
			appId: 'Gk5Irg0b16CY6YzpuU7z2BgB-gzGzoHsz', // your appId
			appKey: '4KMAx3BG4JTXkx5GPVINQ6kb', // your appKey
		},
		nav: [
			{
				text: 'Home',
				link: '/',
				icon: 'reco-home',
			},
			{
				text: 'Timeline',
				link: '/timeline/',
				icon: 'reco-date',
			},
			// {
			//     "text": "Docs",
			//     "icon": "reco-message",
			//     "items": [
			//         {
			//             "text": "vuepress-reco",
			//             "link": "/docs/theme-reco/"
			//         }
			//     ]
			// },
			{
				text: 'Github',
				link: 'https://github.com/tyh321',
				icon: 'reco-github',
			},
		],
		// "sidebar": {
		//     "/docs/theme-reco/": [
		//         "",
		//         "theme",
		//         "plugin",
		//         "api"
		//     ]
		// },
		type: 'blog',
		blogConfig: {
			// "category": {
			//     "location": 2,
			//     "text": "Category"
			// },
			tag: {
				location: 3,
				text: 'Nav',
			},
		},
		// "friendLink": [
		//     {
		//         "title": "午后南杂",
		//         "desc": "Enjoy when you can, and endure when you must.",
		//         "email": "1156743527@qq.com",
		//         "link": "https://www.recoluan.com"
		//     },
		//     {
		//         "title": "vuepress-theme-reco",
		//         "desc": "A simple and beautiful vuepress Blog & Doc theme.",
		//         "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
		//         "link": "https://vuepress-theme-reco.recoluan.com"
		//     }
		// ],
		logo: '/avatar.png',
		search: true,
		searchMaxSuggestions: 10,
		lastUpdated: 'Last Updated',
		author: '杭杭',
		authorAvatar: '/avatar.png',
		record: '豫ICP备2022024459号-1',
		recordLink: 'https://beian.miit.gov.cn',
		startYear: '2022',
	},
	markdown: {
		lineNumbers: true,
	},
	plugins: [
		[VuePressPluginCodeCopy],
		// 更新刷新插件
		[
			'@vuepress/pwa',
			{
				serviceWorker: true,
				updatePopup: {
					message: '发现新内容可用',
					buttonText: '刷新',
				},
			},
		],
		// 鼠标点击效果
		[
			'vuepress-plugin-cursor-effects',
			{
				size: 2, // size of the particle, default: 2
				shape: 'circle', // shape of the particle, default: 'star'
				zIndex: 999999999, // z-index property of the canvas, default: 999999999
			},
		],
	],
	configureWebpack: {
		plugins: [
			new CompressionPlugin({
				filename: '[path].gz', //编译后的文件名
				algorithm: 'gzip',
				test: /\.js$|\.css$|\.html$/, //需要编译的文件
				threshold: 10240, //需要编译的文件大小
				minRatio: 0.8, //压缩比
				deleteOriginalAssets: false, //编译时是否删除源文件
			}),
		],
	},
};
