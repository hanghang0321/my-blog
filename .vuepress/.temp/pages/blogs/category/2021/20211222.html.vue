<template>
	<div>
		<div class="language-javascript ext-js line-numbers-mode">
			<pre v-pre class="language-javascript"><code>const uploadData = {
    props: {
        'on-success': () =&gt; this.handleSuccess(scope.row),
    },
};
&lt;el-upload
    ref=&quot;upload&quot;
    accept=&quot;.png&quot;
    action={this.$store.getters.OSS.host}
    data={this.$store.getters.OSS.data}
    before-upload={this.beforeUpload}
    {...uploadData}
    limit={1}
    file-list={this.fileList}
    show-file-list={false}
&gt;
    &lt;i class=&quot;el-icon-s-check&quot;&gt;&lt;/i&gt;
    &lt;el-button type=&quot;text&quot; style=&quot;color:#606266&quot;&gt;
        上传标记
    &lt;/el-button&gt;
&lt;/el-upload&gt;;
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
			</div>
		</div>
	</div>
</template>
