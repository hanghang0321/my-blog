<template>
	<div>
		<p>::: tip webpack 只有在正式环境打包才会在 js 文件后面拼接 hash 值 :::</p>
		<div class="language-javascript ext-js line-numbers-mode">
			<pre v-pre class="language-javascript"><code>chainWebpack: config =&gt; {
    config.output.filename('./static/js/[name].[chunkhash:8].js');
    config.output.chunkFilename('./static/js/[name].[chunkhash:8].js');
};
</code></pre>
			<div class="line-numbers" aria-hidden="true">
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
			</div>
		</div>
	</div>
</template>
