<template>
	<div>
		<p>::: tip <code v-pre>trigger：'blur'</code>时，级联选择器的内容发生变化时不会触发验证，需要换成<code v-pre>trigger：'change'</code> :::</p>
		<div class="language-javascript ext-js line-numbers-mode">
			<pre
				v-pre
				class="language-javascript"
			><code>  &lt;el-form :model=&quot;ruleForm&quot; :rules=&quot;rules&quot; ref=&quot;ruleForm&quot; label-width=&quot;100px&quot; class=&quot;demo-ruleForm&quot;&gt;
    &lt;el-form-item label=&quot;选择分类&quot; prop=&quot;sorts&quot;&gt;
      &lt;el-cascader
        :options=&quot;options&quot;
        change-on-select
        filterable
        v-model=&quot;ruleForm.sorts&quot;
        clearable&gt;&lt;/el-cascader&gt;
    &lt;/el-form-item&gt;
  &lt;/el-form&gt;

  data() {
    /*表单验证*/
    ruleForm: {
      sorts: '',
    },
    /*验证规则*/
    rules: {
      sorts: [
          { required: true, message: '请选择分类', trigger: 'change'}
      ],
    }
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
			</div>
		</div>
	</div>
</template>
