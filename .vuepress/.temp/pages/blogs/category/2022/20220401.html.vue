<template>
	<div>
		<h1 id="postcss-px-to-viewport" tabindex="-1"><a class="header-anchor" href="#postcss-px-to-viewport" aria-hidden="true">#</a> postcss-px-to-viewport</h1>
		<p>postcss-px-to-viewport 一种屏幕适配方案 将 px 单位转换为视口单位的 (vw, vh, vmin, vmax) 的 PostCSS 插件</p>
		<p><a href="https://github.com/evrone/postcss-px-to-viewport" target="_blank" rel="noopener noreferrer">GitHub 地址</a></p>
		<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2>
		<p>如果你的样式需要做根据视口大小来调整宽度，这个脚本可以将你 CSS 中的 px 单位转化为 vw，1vw 等于 1/100 视口宽度。</p>
		<h3 id="输入" tabindex="-1"><a class="header-anchor" href="#输入" aria-hidden="true">#</a> 输入</h3>
		<div class="language-css ext-css line-numbers-mode">
			<pre v-pre class="language-css"><code>.class {
    margin: -10px 0.5vh;
    padding: 5vmin 9.5px 1px;
    border: 3px solid black;
    border-bottom-width: 1px;
    font-size: 14px;
    line-height: 20px;
}

.class2 {
    padding-top: 10px; /* px-to-viewport-ignore */
    /* px-to-viewport-ignore-next */
    padding-bottom: 10px;
    /* Any other comment */
    border: 1px solid black;
    margin-bottom: 1px;
    font-size: 20px;
    line-height: 30px;
}

@media (min-width: 750px) {
    .class3 {
        font-size: 16px;
        line-height: 22px;
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
			</div>
		</div>
		<h4 id="输出" tabindex="-1"><a class="header-anchor" href="#输出" aria-hidden="true">#</a> 输出</h4>
		<div class="language-css ext-css line-numbers-mode">
			<pre v-pre class="language-css"><code>.class {
    margin: -3.125vw 0.5vh;
    padding: 5vmin 2.96875vw 1px;
    border: 0.9375vw solid black;
    border-bottom-width: 1px;
    font-size: 4.375vw;
    line-height: 6.25vw;
}

.class2 {
    padding-top: 10px;
    padding-bottom: 10px;
    /* Any other comment */
    border: 1px solid black;
    margin-bottom: 1px;
    font-size: 6.25vw;
    line-height: 9.375vw;
}

@media (min-width: 750px) {
    .class3 {
        font-size: 16px;
        line-height: 22px;
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
			</div>
		</div>
		<h2 id="上手" tabindex="-1"><a class="header-anchor" href="#上手" aria-hidden="true">#</a> 上手</h2>
		<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3>
		<p>使用 npm 安装</p>
		<div class="language-text ext-text line-numbers-mode">
			<pre v-pre class="language-text"><code>npm install postcss-px-to-viewport --save-dev
</code></pre>
			<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div>
		</div>
		<p>或者使用 yarn 进行安装</p>
		<div class="language-text ext-text line-numbers-mode">
			<pre v-pre class="language-text"><code>yarn add -D postcss-px-to-viewport
</code></pre>
			<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div>
		</div>
		<h4 id="配置参数" tabindex="-1"><a class="header-anchor" href="#配置参数" aria-hidden="true">#</a> 配置参数</h4>
		<h4 id="默认参数" tabindex="-1"><a class="header-anchor" href="#默认参数" aria-hidden="true">#</a> 默认参数:</h4>
		<div class="language-javascript ext-js line-numbers-mode">
			<pre v-pre class="language-javascript"><code>{
  unitToConvert: 'px',
  viewportWidth: 320,
  unitPrecision: 5,
  propList: ['*'],
  viewportUnit: 'vw',
  fontViewportUnit: 'vw',
  selectorBlackList: [],
  minPixelValue: 1,
  mediaQuery: false,
  replace: true,
  exclude: undefined,
  include: undefined,
  landscape: false,
  landscapeUnit: 'vw',
  landscapeWidth: 568
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
			</div>
		</div>
		<div class="language-text ext-text line-numbers-mode">
			<pre v-pre class="language-text"><code>unitToConvert (String) 需要转换的单位，默认为&quot;px&quot;
viewportWidth (Number) 设计稿的视口宽度
unitPrecision (Number) 单位转换后保留的精度
propList (Array) 能转化为vw的属性列表
传入特定的CSS属性；
可以传入通配符&quot;&quot;去匹配所有属性，例如：['']；
在属性的前或后添加&quot;*&quot;,可以匹配特定的属性. (例如['position'] 会匹配 background-position-y)
在特定属性前加 &quot;!&quot;，将不转换该属性的单位 . 例如: ['*', '!letter-spacing']，将不转换letter-spacing
&quot;!&quot; 和 &quot;&quot;可以组合使用， 例如: ['', '!font*']，将不转换font-size以及font-weight等属性
viewportUnit (String) 希望使用的视口单位
fontViewportUnit (String) 字体使用的视口单位
selectorBlackList (Array) 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
如果传入的值为字符串的话，只要选择器中含有传入值就会被匹配
例如 selectorBlackList 为 ['body'] 的话， 那么 .body-class 就会被忽略
如果传入的值为正则表达式的话，那么就会依据CSS选择器是否匹配该正则
例如 selectorBlackList 为 [/^body$/] , 那么 body 会被忽略，而 .body 不会
minPixelValue (Number) 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
mediaQuery (Boolean) 媒体查询里的单位是否需要转换单位
replace (Boolean) 是否直接更换属性值，而不添加备用属性
exclude (Array or Regexp) 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
如果值是一个正则表达式，那么匹配这个正则的文件会被忽略
如果传入的值是一个数组，那么数组里的值必须为正则
include (Array or Regexp) 如果设置了include，那将只有匹配到的文件才会被转换，例如只转换 'src/mobile' 下的文件 (include: /\/src\/mobile\//)
如果值是一个正则表达式，将包含匹配的文件，否则将排除该文件
如果传入的值是一个数组，那么数组里的值必须为正则
landscape (Boolean) 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
landscapeUnit (String) 横屏时使用的单位
landscapeWidth (Number) 横屏时使用的视口宽度
exclude和include是可以一起设置的，将取两者规则的交集。
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
			</div>
		</div>
	</div>
</template>
