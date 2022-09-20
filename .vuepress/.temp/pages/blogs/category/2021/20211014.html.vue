<template>
	<div>
		<p>::: tip 采用 vite + typescript 开发，配置别名时会报错：找不到模块“path”或其相应的类型声明 或者 找不到名称“__dirname”等 :::</p>
		<p><img src="https://raw.githubusercontent.com/hanghang0321/images/main/screenshot-20211014-154229.png" alt="" /></p>
		<p>解决办法：</p>
		<div class="language-javascript ext-js line-numbers-mode">
			<pre v-pre class="language-javascript"><code>npm install @types/node --save-dev
</code></pre>
			<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div>
		</div>
	</div>
</template>
