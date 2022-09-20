<template>
	<div>
		<ol>
			<li>在外层选择<code v-pre>with input as {query}</code></li>
		</ol>
		<p><img src="https://raw.githubusercontent.com/hanghang0321/images/main/20211106165001.png" alt="" /></p>
		<ol start="2">
			<li>在 Script 地址后输入 <code v-pre>{query}</code> 变量</li>
		</ol>
		<p><img src="https://raw.githubusercontent.com/hanghang0321/images/main/20211106165123.png" alt="" /></p>
		<ol start="3">
			<li>在项目地址安装 alfy</li>
		</ol>
		<div class="language-text ext-text line-numbers-mode">
			<pre v-pre class="language-text"><code>npm install alfy
</code></pre>
			<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div>
		</div>
		<ol start="4">
			<li>在 node 中使用</li>
		</ol>
		<div class="language-javascript ext-js line-numbers-mode">
			<pre v-pre class="language-javascript"><code>const alfy = require('alfy');
</code></pre>
			<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div>
		</div>
	</div>
</template>
