<template>
	<div>
		<p>:::tip 动态生成的表头需要 加上 slot-scope=&quot;scope&quot; v-model 才起作用 :::</p>
		<div class="language-html ext-html line-numbers-mode">
			<pre
				v-pre
				class="language-html"
			><code>&lt;el-table-column v-for=&quot;item in insuranceForm.content.headers&quot; :key=&quot;item.index&quot; :label=&quot;item.name&quot; align=&quot;center&quot; min-width=&quot;180&quot;&gt;
    &lt;template slot=&quot;header&quot; slot-scope=&quot;scope&quot;&gt;
        // slot 表头
        &lt;el-input v-model=&quot;insuranceForm.content.headers[item.index].name&quot; size=&quot;normal&quot; class=&quot;planInput&quot; clearable&gt;&lt;/el-input&gt;
    &lt;/template&gt;
&lt;/el-table-column&gt;
</code></pre>
			<div class="line-numbers" aria-hidden="true">
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
