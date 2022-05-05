const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"start-925a8243.js","js":["start-925a8243.js","chunks/index-73edfeb2.js","chunks/index-676e35b7.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js'))
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "what-is-my-user-agent",
				pattern: /^\/what-is-my-user-agent\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/what-is-my-user-agent.ts.js'))
			},
			{
				type: 'page',
				id: "items/[id]",
				pattern: /^\/items\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				path: null,
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/items/_id_.ts.js')),
				a: [0,3],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
