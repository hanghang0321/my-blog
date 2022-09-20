<template>
	<div>
		<h1 id="pwa" tabindex="-1"><a class="header-anchor" href="#pwa" aria-hidden="true">#</a> PWA</h1>
		<p>PWA，英文全称：<code v-pre>Progressive Web Apps</code>， 中文翻译：渐进式 Web 应用。</p>
		<p>引用 <a href="https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps" target="_blank" rel="noopener noreferrer">MDN</a> 的介绍：</p>
		<blockquote>
			<p>
				PWA 指的是使用指定技术和标准模式来开发的 Web 应用，这同时赋予它们 Web 应用和原生应用的特性。 例如一方面，Web
				应用更加易于发现：相比于安装应用，访问一个网站显然更加容易和迅速。你还可以通过链接来分享 Web 应用。
			</p>
			<p>
				另一方面，原生应用与操作系统可以更加完美的整合，也因此为用户提供了无缝的用户体验。你可以通过安装应用使得它在离线的状态下也可以运行；相较于使用浏览器访问，用户也更喜欢通过点击主页上的图标来访问它们喜爱的应用。
				PWA 赋予了我们创建同时拥有以上两种优势的应用的能力。
			</p>
		</blockquote>
		<h1 id="体验" tabindex="-1"><a class="header-anchor" href="#体验" aria-hidden="true">#</a> 体验</h1>
		<p>
			如果你之前没有了解过 PWA，大概率可能也不明白这是个什么效果，没有关系，我们直接看一个 PWA 应用示例，我们打开
			<a href="https://m.weibo.cn/" target="_blank" rel="noopener noreferrer">https://m.weibo.cn/</a>，这里是在电脑端打开的：
			<img src="https://raw.githubusercontent.com/hanghang0321/images/main/20220308151027.png" alt="" />
			我们可以看到，在地址栏还有一个安装图标，点击一下，就会弹出安装应用的选项框：
			<img src="https://raw.githubusercontent.com/hanghang0321/images/main/20220308151139.png" alt="" />
			同时，打开 Mac 的启动台，我们会看到已经添加了微博的图标：
			<img src="https://raw.githubusercontent.com/hanghang0321/images/main/20220308152202.png" alt="" />
			点击就会直接打开上面的应用窗口。
		</p>
		<p>简单的来说，我们兼容 PWA，就是想要实现这样的桌面图标的功能，当然了， PWA 其他还有离线缓存、推送通知等功能，这里就不多说了。</p>
		<h1 id="开启-pwa" tabindex="-1"><a class="header-anchor" href="#开启-pwa" aria-hidden="true">#</a> 开启 PWA</h1>
		<p>开启 PWA，需要注意三个点：</p>
		<ol>
			<li>提供一个 manifest.json 文件，描述应用的名称、图标等信息</li>
			<li>开启 Service Worker，这个交给现有的 PWA 插件来实现</li>
			<li>开启 HTTPS</li>
		</ol>
		<h1 id="实践" tabindex="-1"><a class="header-anchor" href="#实践" aria-hidden="true">#</a> 实践</h1>
		<h1 id="_1-安装" tabindex="-1"><a class="header-anchor" href="#_1-安装" aria-hidden="true">#</a> 1. 安装</h1>
		<p>
			插件地址：<a href="https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-pwa.html" target="_blank" rel="noopener noreferrer"
				>https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-pwa.html</a
			>
		</p>
		<div class="language-text ext-text line-numbers-mode">
			<pre v-pre class="language-text"><code>yarn add -D @vuepress/plugin-pwa
npm install -D @vuepress/plugin-pwa
</code></pre>
			<div class="line-numbers" aria-hidden="true">
				<div class="line-number"></div>
				<div class="line-number"></div>
			</div>
		</div>
		<h1 id="_2-修改-config-js" tabindex="-1"><a class="header-anchor" href="#_2-修改-config-js" aria-hidden="true">#</a> 2. 修改 config.js</h1>
		<div class="language-javascript ext-js line-numbers-mode">
			<pre v-pre class="language-javascript"><code>module.exports = {
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  plugins: [
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
            message: &quot;发现新内容可用&quot;,
            buttonText: &quot;刷新&quot;
        }
     }
    ]
  ]
}
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
		<h1 id="_3-添加-manifest-json-等资源" tabindex="-1">
			<a class="header-anchor" href="#_3-添加-manifest-json-等资源" aria-hidden="true">#</a> 3. 添加 manifest.json 等资源
		</h1>
		<p>
			接下来我们添加所需要的资源，在 <code v-pre>.vuepress</code>目录下建立 <code v-pre>public</code>文件夹，然后添加所需要的文件如
			<code v-pre>manifest.json</code>文件：
		</p>
		<div class="language-json ext-json line-numbers-mode">
			<pre v-pre class="language-json"><code>{
    &quot;name&quot;: &quot;TypeScript中文文档&quot;,
    &quot;short_name&quot;: &quot;TypeScriptDocs&quot;,
    &quot;display&quot;: &quot;standalone&quot;,
    &quot;background_color&quot;: &quot;#fff&quot;,
    &quot;start_url&quot;: &quot;/learn-typescript-test/&quot;,
    &quot;scope&quot;: &quot;/learn-typescript-test/&quot;,
    &quot;description&quot;: &quot;TypeScript 中文文档 进阶教程&quot;,
    &quot;icons&quot;: [{
      &quot;src&quot;: &quot;logo52.png&quot;,
      &quot;sizes&quot;: &quot;52x52&quot;,
      &quot;type&quot;: &quot;image/png&quot;
    },{
       &quot;src&quot;: &quot;logo288.png&quot;,
       &quot;sizes&quot;: &quot;288x288&quot;,
       &quot;type&quot;: &quot;image/png&quot;
    }]
  }
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
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
			</div>
		</div>
		<p>
			这其中字段的具体含义，可以查看 MDN 的
			<a href="https://developer.mozilla.org/zh-CN/docs/Web/Manifest" target="_blank" rel="noopener noreferrer">Manifest</a> 介绍。
		</p>
		<p>
			要注意其中的 <code v-pre>start_url</code>和<code v-pre>scope</code>，如果你使用的是 GitHub 或者 Gitee 仓库的 Pages
			服务，并且地址上带了仓库名，你需要将这里的<code v-pre>learn-typescript-test</code>替换为你的仓库名，如果是直接的域名，<code v-pre>start_url</code> 写成
			<code v-pre>\</code>，scope写成 <code v-pre>.</code>或者直接不写。
		</p>
		<p>然后是补齐所需要的图标图片：</p>
		<p><img src="https://raw.githubusercontent.com/hanghang0321/images/main/640.png" alt="" /></p>
	</div>
</template>
