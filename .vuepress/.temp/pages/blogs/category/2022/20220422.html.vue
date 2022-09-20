<template>
	<div>
		<h1 id="postcss-px-to-viewport" tabindex="-1"><a class="header-anchor" href="#postcss-px-to-viewport" aria-hidden="true">#</a> postcss-px-to-viewport</h1>
		<h2 id="遇到的问题" tabindex="-1"><a class="header-anchor" href="#遇到的问题" aria-hidden="true">#</a> 遇到的问题</h2>
		<p>include 设置了但是没有作用，还是会全部文件替换成 vw</p>
		<div class="language-javascript ext-js line-numbers-mode">
			<pre v-pre class="language-javascript"><code>    css: {
        sourceMap: false,
        loaderOptions: {
            postcss: {
                plugins: [
                    require('@our-patches/postcss-px-to-viewport')({
                        unitToConvert: 'px', // 需要转换的单位，默认为&quot;px&quot;
                        viewportWidth: 375, // 设计稿的视口宽度
                        unitPrecision: 5, // 单位转换后保留的精度
                        propList: ['*'], // 能转化为vw的属性列表
                        viewportUnit: 'vw', // 希望使用的视口单位
                        fontViewportUnit: 'vw', // 字体使用的视口单位
                        selectorBlackList: [], // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位
                        minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
                        mediaQuery: true, // 媒体查询里的单位是否需要转换单位
                        replace: true, // 是否直接更换属性值，而不添加备用属性
                        exclude: undefined, // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
                        include: /\/src\/views\/home\//, // 如果设置了include，那将只有匹配到的文件才会被转换
                        landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件
                        landscapeUnit: 'vw', // 横屏时使用的单位
                        landscapeWidth: 750, // 横屏时使用的视口宽度
                    }),
                ],
            },
        },
    },
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
			</div>
		</div>
		<h2 id="问题原因" tabindex="-1"><a class="header-anchor" href="#问题原因" aria-hidden="true">#</a> 问题原因</h2>
		<p>经过排查，发现npm版本不是最新</p>
		<h2 id="问题解决" tabindex="-1"><a class="header-anchor" href="#问题解决" aria-hidden="true">#</a> 问题解决</h2>
		<div class="language-text ext-text line-numbers-mode">
			<pre v-pre class="language-text"><code>npm i @our-patches/postcss-px-to-viewport -D
</code></pre>
			<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div>
		</div>
	</div>
</template>
