<template>
	<div>
		<p>1、安装 n</p>
		<div class="language-text ext-text line-numbers-mode">
			<pre v-pre class="language-text"><code>sudo npm install -g n
</code></pre>
			<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div>
		</div>
		<p>n 是一个 Node 工具包，它提供了几个升级命令参数：</p>
		<div class="language-text ext-text line-numbers-mode">
			<pre v-pre class="language-text"><code>n 显示已安装的Node版本
n latest 安装最新版本Node
n stable 安装最新稳定版Node
n lts 安装最新长期维护版(lts)Node
n version 根据提供的版本号安装Node
</code></pre>
			<div class="line-numbers" aria-hidden="true">
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
			</div>
		</div>
		<p>2、升级 最新稳定版 Node</p>
		<div class="language-text ext-text line-numbers-mode">
			<pre v-pre class="language-text"><code>sudo n stable
</code></pre>
			<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div>
		</div>
		<p>3、升级最新 npm</p>
		<div class="language-text ext-text line-numbers-mode">
			<pre v-pre class="language-text"><code>sudo npm install npm@latest -g
</code></pre>
			<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div>
		</div>
		<p>3、检查</p>
		<div class="language-text ext-text line-numbers-mode">
			<pre v-pre class="language-text"><code>node -v
npm -v
</code></pre>
			<div class="line-numbers" aria-hidden="true">
				<div class="line-number"></div>
				<div class="line-number"></div>
			</div>
		</div>
	</div>
</template>
