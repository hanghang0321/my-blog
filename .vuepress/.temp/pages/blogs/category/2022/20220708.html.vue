<template>
	<div>
		<div class="language-html ext-html line-numbers-mode">
			<pre v-pre class="language-html"><code>&lt;transition name=&quot;scale-down-to-down&quot;&gt;
    &lt;router-view class=&quot;app-router-view&quot; /&gt;
&lt;/transition&gt;
</code></pre>
			<div class="line-numbers" aria-hidden="true">
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
			</div>
		</div>
		<p><img src="https://raw.githubusercontent.com/hanghang0321/images/main/20220708132323.png" alt="" /></p>
		<div class="language-css ext-css line-numbers-mode">
			<pre v-pre class="language-css"><code>.scale-down-to-down-enter-active {
    -webkit-animation: m 0.5s ease both;
    animation: m 0.5s ease both;
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
}
.scale-down-to-down-leave-active {
    -webkit-animation: n 0.7s ease both;
    animation: n 0.7s ease both;
}
@-webkit-keyframes m {
    0% {
        opacity: 0;
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
    }
}
@keyframes m {
    0% {
        opacity: 0;
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
    }
}
@-webkit-keyframes n {
    to {
        opacity: 0;
        -webkit-transform: scale(0.8);
        transform: scale(0.8);
    }
}
@keyframes n {
    to {
        opacity: 0;
        -webkit-transform: scale(0.8);
        transform: scale(0.8);
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
		<p>给 router-view 加一个过渡动画放大缩小，导致 el-select 计算出现偏差，弹出层出现错位</p>
		<p>解决：去掉动画或者加一个不影响计算逻辑的动画即可</p>
	</div>
</template>
