<template>
	<div>
		<p>::: tip <code v-pre>v-if</code>和<code v-pre>v-permissions</code>不能同时使用，否则会出现<code v-pre>v-permissions</code>无效问题 :::</p>
		<div class="language-javascript ext-js line-numbers-mode">
			<pre v-pre class="language-javascript"><code>// 可以选择合并使用
v-if=&quot;['insurance', 'insurance', 'social'].includes(activeName) &amp;&amp; hasPermissions(['ShZjSupplierIndexAddButt'])&quot;
</code></pre>
			<div class="line-numbers" aria-hidden="true">
				<div class="line-number"></div>
				<div class="line-number"></div>
			</div>
		</div>
	</div>
</template>
