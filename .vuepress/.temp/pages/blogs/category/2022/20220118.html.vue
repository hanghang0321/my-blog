<template>
	<div>
		<p>使用 require 对资源进行引用</p>
		<div class="language-html ext-html line-numbers-mode">
			<pre v-pre class="language-html"><code>&lt;img :src=&quot;require('../../assets/login-ikon.png')&quot; alt=&quot;插画&quot; /&gt;
</code></pre>
			<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div>
		</div>
		<p>结果出现了如下的错误</p>
		<p><img src="https://raw.githubusercontent.com/hanghang0321/images/main/20220118165021.png" alt="" /></p>
		<p>初步判断这是因为 require 是属于 Webpack 的方法，而我使用的是 Vite，所以我们需要去寻找 Vite 静态资源处理的方法，方法如下。</p>
		<p><img src="https://raw.githubusercontent.com/hanghang0321/images/main/20220118165555.png" alt="" /></p>
		<p>所以，我们只需要将代码改写以下形式即可。 ​</p>
		<p>template</p>
		<div class="language-html ext-html line-numbers-mode">
			<pre v-pre class="language-html"><code>&lt;img :src=&quot;getImageUrl('../../assets/login-ikon.png')&quot; alt=&quot;插画&quot; /&gt;
</code></pre>
			<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div>
		</div>
		<p>script</p>
		<div class="language-javascript ext-js line-numbers-mode">
			<pre v-pre class="language-javascript"><code>const getImageUrl = name =&gt; {
    return new URL(name, import.meta.url).href;
};
</code></pre>
			<div class="line-numbers" aria-hidden="true">
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
			</div>
		</div>
	</div>
</template>
