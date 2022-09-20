<template>
	<div>
		<h1 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h1>
		<p>
			在使用 GitHub Ac­tions
			的过程中，每次工作流程运行失败都会给我发送通知邮件，这是个很贴心的功能。但工作流程运行成功就不那么贴心了，也许官方考虑到邮件过多会打扰到用户，所以默认只发送失败的邮件，毕竟多数情况下工作流程都是正常运行的。如果需要运行成功的通知邮件，可以手动去开启这个功能。
		</p>
		<h1 id="设置步骤" tabindex="-1"><a class="header-anchor" href="#设置步骤" aria-hidden="true">#</a> 设置步骤</h1>
		<ul>
			<li>在 GitHub 任意页面点击右上角自己的头像</li>
			<li>然后单击 Settings（设置）</li>
			<li>在用户设置侧边栏中，点击 Notifications（通知）</li>
			<li>取消勾选 Send notifications for failed workflows only（仅在工作流程失败时通知）</li>
		</ul>
		<p><img src="https://raw.githubusercontent.com/hanghang0321/images/main/github-20211012-175129.png" alt="" /></p>
	</div>
</template>
