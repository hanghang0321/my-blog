<template>
	<div>
		<p>::: tip 全国哀悼日，各大网公司网站的风格都变灰了，是怎么实现的呢？其实很简单，一行代码就搞定。 ::: 将 html 下的所有内容置灰 grayscale 为灰度</p>
		<div class="language-css ext-css line-numbers-mode">
			<pre v-pre class="language-css"><code>html {
    filter: grayscale(100%);
}
</code></pre>
			<div class="line-numbers" aria-hidden="true">
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
			</div>
		</div>
		<p>css filter 是什么属性？用 css filter mdn 关键字查了下，这里 filter 翻译为 滤镜，他可以将模糊或色相等图形效果应用于元素，来看一些例子</p>
		<p>模糊，类似于马赛克效果</p>
		<div class="language-css ext-css line-numbers-mode">
			<pre v-pre class="language-css"><code>filter: blur(5px);
</code></pre>
			<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div>
		</div>
		<p>对比度</p>
		<div class="language-css ext-css line-numbers-mode">
			<pre v-pre class="language-css"><code>filter: contrast(100%);
</code></pre>
			<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div>
		</div>
		<p>色相</p>
		<div class="language-css ext-css line-numbers-mode">
			<pre v-pre class="language-css"><code>filter: hue-rotate(90deg);
</code></pre>
			<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div>
		</div>
		<p>阴影</p>
		<div class="language-css ext-css line-numbers-mode">
			<pre v-pre class="language-css"><code>filter: drop-shadow(16px 16px 20px red) invert(75%);
</code></pre>
			<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div>
		</div>
		<p>
			兼容性除了 IE4-9，其他基本都兼容。Internet Explorer 4 to 9 implemented a non-standard filter property. The syntax was completely different from this one.
		</p>
		<p>
			::: right 更多 filter 文档及用法，参考：<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter" target="_blank" rel="noopener noreferrer"
				>css filter - MDN
			</a>
			:::
		</p>
	</div>
</template>
