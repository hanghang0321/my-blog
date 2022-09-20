const { resolve } = require('path');

module.exports = (options, context) => ({
	define() {
		const { copySelector, copyMessage, toolTipMessage, duration } = options;

		return {
			COPY_SELECTOR: copySelector || ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'],
			COPY_MESSAGE: copyMessage || '复制成功',
			TOOL_TIP_MESSAGE: toolTipMessage || '复制成功',
			DURATION: duration || 3000,
		};
	},

	clientRootMixin: resolve(__dirname, './bin/clientRootMixin.js'),
});
