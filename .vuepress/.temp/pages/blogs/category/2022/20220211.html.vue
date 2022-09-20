<template>
	<div>
		<h3 id="采用服务器渲染模式" tabindex="-1"><a class="header-anchor" href="#采用服务器渲染模式" aria-hidden="true">#</a> 采用服务器渲染模式</h3>
		<p><code v-pre>store/index.js</code></p>
		<div class="language-text ext-text line-numbers-mode">
			<pre v-pre class="language-text"><code>export const state = () =&gt; ({
    domain: '',
});

export const mutations = {
    setDomain(state, domain) {
        state.domain = domain;
    },
};

// 自动执行
export const actions = {
    nuxtServerInit(store, context) {
        store.commit('setDomain', context.req.headers.host);
    },
};

export const getters = {
    domain: (state) =&gt; state.domain,
};
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
			</div>
		</div>
		<p><code v-pre>nginx 暴露请求头</code></p>
		<div class="language-text ext-text line-numbers-mode">
			<pre v-pre class="language-text"><code>upstream tyh21 {
    server 127.0.0.1:20010; #nuxt项目 监听端口
    keepalive 64;
}
server {
    listen 80;
    server_name tyh21.top;

    location / {
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection &quot;upgrade&quot;;
        proxy_set_header Host $host;
        proxy_set_header X-Nginx-Proxy true;
        proxy_cache_bypass $http_upgrade;
        proxy_pass http://tyh21; #反向代理
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
			</div>
		</div>
		<h3 id="静态渲染" tabindex="-1"><a class="header-anchor" href="#静态渲染" aria-hidden="true">#</a> 静态渲染</h3>
		<div class="language-text ext-text line-numbers-mode">
			<pre v-pre class="language-text"><code>mounted () {
    console.log(location.host);
}
</code></pre>
			<div class="line-numbers" aria-hidden="true">
				<div class="line-number"></div>
				<div class="line-number"></div>
				<div class="line-number"></div>
			</div>
		</div>
	</div>
</template>
