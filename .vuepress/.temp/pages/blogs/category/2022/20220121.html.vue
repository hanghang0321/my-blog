<template>
	<div>
		<h1 id="array-prototype-entries" tabindex="-1">
			<a class="header-anchor" href="#array-prototype-entries" aria-hidden="true">#</a> Array.prototype.entries()
		</h1>
		<p>的 <code v-pre>entries()</code> 方法返回一个新的数组迭代包含该阵列中的每个索引的键/值对的对象。</p>
		<h1 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> Syntax</h1>
		<div class="language-javascript ext-js line-numbers-mode">
			<pre v-pre class="language-javascript"><code>entries();
</code></pre>
			<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div>
		</div>
		<h1 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值" aria-hidden="true">#</a> 返回值</h1>
		<p>一个新的 <code v-pre>Array</code> 迭代器对象</p>
		<h1 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h1>
		<h3 id="迭代索引和元素" tabindex="-1"><a class="header-anchor" href="#迭代索引和元素" aria-hidden="true">#</a> 迭代索引和元素</h3>
		<div class="language-javascript ext-js line-numbers-mode">
			<pre v-pre class="language-javascript"><code>const a = ['a', 'b', 'c'];

for (const [index, element] of a.entries()) console.log(index, element);

// 0 'a'
// 1 'b'
// 2 'c'
</code></pre>
			<div class="line-numbers" aria-hidden="true">
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
			</div>
		</div>
		<h3 id="使用-for-of-循环" tabindex="-1"><a class="header-anchor" href="#使用-for-of-循环" aria-hidden="true">#</a> 使用 for…of 循环</h3>
		<div class="language-javascript ext-js line-numbers-mode">
			<pre v-pre class="language-javascript"><code>var a = ['a', 'b', 'c'];
var iterator = a.entries();

for (let e of iterator) {
    console.log(e);
}
// [0, 'a']
// [1, 'b']
// [2, 'c']
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
			</div>
		</div>
	</div>
</template>
